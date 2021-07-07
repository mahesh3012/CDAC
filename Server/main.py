from flask import Flask,jsonify, request, make_response
from flask_sqlalchemy import SQLAlchemy
import pymysql
import json 
import jwt
from werkzeug.security import generate_password_hash, check_password_hash
from functools import wraps

#for sending emails
from flask_mail import Mail,Message
from random import randint

with open('config.json','r') as c:
    params=json.load(c)["params"]

if(params["local_server"]):
    conn=params['local_uri']

app=Flask(__name__)

#for connecting mysqldatabase and sqlalchemy
app.config['SECRET_KEY']='SuperSecretKey'
app.config['SQLALCHEMY_DATABASE_URI']=conn

db = SQLAlchemy(app)

#required configs for mail
mail=Mail(app)
app.config["MAIL_SERVER"]='smtp.gmail.com'                  
app.config["MAIL_PORT"]=465
app.config["MAIL_USERNAME"]=''#sender_email_username      #allow less secure apps access in google settings of this account
app.config['MAIL_PASSWORD']=''#mail_password                    #you have to give your password of gmail account
app.config['MAIL_USE_TLS']=False
app.config['MAIL_USE_SSL']=True
mail=Mail(app)

#getting databases
class vehicle_info(db.Model):
    image_id=db.Column(db.String(50), primary_key=True)
    uuid=db.Column(db.String(50))
    license_number=db.Column(db.String(50))
    vehicle_detection_confidence=db.Column(db.Float(50))
    license_number_chars_confidence_list=db.Column(db.String(50))
    license_number_confidence_sum=db.Column(db.Float(50))
    cam_id=db.Column(db.String(50))
    timestamp=db.Column(db.String(50))
    user_id=db.Column(db.String(50))
    #user_id=db.Column(db.String(50), db.ForeignKey('user.user_id'))
    manually_enter_LP_number=db.Column(db.String(50))

class user_info(db.Model):
    user_id=db.Column(db.String(50), primary_key=True)
    editing_rights=db.Column(db.Integer)
    user_password=db.Column(db.String(50))
    user_mail_id=db.Column(db.String(50))
    #vehicles=db.relationship('vehicle_info',backref='user',lazy='select')

def token_required(f):
    @wraps(f)
    def decorated(*args,**kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']
        if not token:
            return jsonify({'message':'token is missing'}),401
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
            current_user=user_info.query.filter_by(user_id=data['username']).first()
        except:
            return  jsonify({'message':'token is invalid'}),401
        
        return f(current_user,*args,**kwargs)
    
    return decorated

@app.route('/login',methods=['POST','GET'])
def login():
    if request.method == 'POST':
        username=request.json['username']
        password=request.json['password']
        if not username or not password:
            return jsonify({"error":"error"})
        user=user_info.query.filter_by(user_id=username).first()
        if not user:
            return jsonify({"error":"Invalid Username"})
        if check_password_hash(user.user_password,password):
            token = jwt.encode({'username':user.user_id},app.config['SECRET_KEY'])
            return jsonify({'token':token.decode('UTF-8')})
        return jsonify({"error":"Invalid Password"})
    else:
        return 'Nothing to see here yet'            

@app.route('/info',methods=['GET'])
@token_required
def get_info(current_user):
    all_info= vehicle_info.query.filter_by(user_id=current_user.user_id).all()
    info_list=[]
    if(current_user.editing_rights):
        for row in all_info:
            indi_info = {
            "image_id":row.image_id,    
            "uuid":row.uuid,
            "license_number":row.license_number,
            "vehicle_detection_confidence":row.vehicle_detection_confidence,
            "license_number_chars_confidence_list":row.license_number_chars_confidence_list,
            "license_number_confidence_sum":row.license_number_confidence_sum,
            "cam_id":row.cam_id,
            "timestamp":row.timestamp,
            "manually_enter_LP_number":row.manually_enter_LP_number,
            }
            info_list.append(indi_info)
    else:
        for row in all_info:
            indi_info = {
            "image_id":row.image_id,    
            "uuid":row.uuid,
            "license_number":row.license_number,
            "vehicle_detection_confidence":row.vehicle_detection_confidence,
            "license_number_chars_confidence_list":row.license_number_chars_confidence_list,
            "license_number_confidence_sum":row.license_number_confidence_sum,
            "cam_id":row.cam_id,
            "timestamp":row.timestamp,
            }
            info_list.append(indi_info)        
    return jsonify(info_list)    

@app.route('/<image_id>',methods=['GET'])
@token_required
def get_image(current_user,image_id):
    row=vehicle_info.query.filter_by(image_id=image_id,user_id=current_user.user_id).first()
    if row:
        return jsonify({'image':"this is your image"})
    return jsonify({"message":"sorry no image found"})

@app.route('/<string:image_id>/manual_lp',methods=['POST'])
@token_required
def change_lp(current_user,image_id):
    if not current_user.editing_rights:
        return jsonify({'message':'Cannot perform this function!'})
    number=request.json['manually_entered_LP_number']
    row=vehicle_info.query.filter_by(image_id=image_id).first()
    row.manually_enter_LP_number=number
    db.session.commit()
    return jsonify({'message':'updated the LP number in database'})

verify_user=user_info.query.filter_by(user_mail_id="email").first()
glob_otp=0
#apis for generating and verifying OTP and changing password
@app.route('/getOTP',methods=["POST"])
def getOTP():
    otp=randint(000000,999999)
    global glob_otp
    glob_otp=otp
    email=request.json['email']
    global verify_user
    verify_user=db.session.query(user_info).filter_by(user_mail_id=email).first()
    if(verify_user):
        msg=Message(subject='CDAC-ForgotPassword-OTP',sender='sender_email',recipients=[email])#sender_email
        msg.body=str("Your OTP to create new password is: "+str(otp))
        mail.send(msg)
        return jsonify({"success":"success"})
    else:
        return jsonify({"error":"Your email is not registered. Please enter a registered email."})

@app.route('/changepassword',methods=['POST'])
def changePassword():
    user_otp=request.json['otp']
    new_password=request.json['password']
    global verify_user,glob_otp
    if glob_otp==int(user_otp):
        user=user_info.query.filter_by(user_id=verify_user.user_id).first() #this is done so that session is started within function and changes occur
        user.user_password=generate_password_hash(new_password)# this hashes the password
        db.session.commit()
        return jsonify({"success":"Your password has been updated, please proceed to login page and login using the new password"
        })
    else:
        return jsonify({"error":"The OTP you have entered is wrong. Try again"})


if __name__=="__main__":
    app.run(debug=True)