from flask import Flask,jsonify, request
from flask_sqlalchemy import SQLAlchemy
import pymysql
import json 
import base64

with open('config.json','r') as c:
    params=json.load(c)["params"]

if(params["local_server"]):
    conn=params['local_uri']

app=Flask(__name__)
app.config['SECRET_KEY']='SuperSecretKey'
app.config['SQLALCHEMY_DATABASE_URI']=conn
db = SQLAlchemy(app)

class vehicle_info(db.Model):
    sno=db.Column(db.Integer, primary_key=True)
    uuid=db.Column(db.String(50))
    license_number=db.Column(db.String(50))
    vehicle_detection_confidence=db.Column(db.Float(50))
    license_number_chars_confidence_list=db.Column(db.String(50))
    license_number_confidence_sum=db.Column(db.Float(50))
    cam_id=db.Column(db.String(50))
    timestamp=db.Column(db.String(50))

class userdata(db.Model):
    sno=db.Column(db.Integer, primary_key=True)
    username=db.Column(db.String(20))
    password=db.Column(db.String(20))
    uuid=db.Column(db.String(50))

@app.route('/',methods=['POST','GET'])
def post_uuid():
    if request.method == 'POST':
        #post request coming from react in form of json
        username=request.json['username']
        password=request.json['password']

        userinfo=userdata.query.filter_by(username=base64.decodebytes(username.encode()).decode(),password=base64.decodebytes(password.encode()).decode()).first()
        if(userinfo):
            return jsonify(userinfo.uuid)
        else:
            return jsonify("error")    
    else:
        return 'Nothing to see here yet'            

@app.route('/<string:uuid>',methods=['GET'])
def get_info(uuid):
    all_info= vehicle_info.query.filter_by(uuid=uuid).all()
    info_list=[]

    for row in all_info:
        indi_info = {
        "sno":row.sno,    
        "uuid":row.uuid,
        "license_number":row.license_number,
        "vehicle_detection_confidence":row.vehicle_detection_confidence,
        "license_number_chars_confidence_list":row.license_number_chars_confidence_list,
        "license_number_confidence_sum":row.license_number_confidence_sum,
        "cam_id":row.cam_id,
        "timestamp":row.timestamp
        }
        info_list.append(indi_info)
    return jsonify(info_list)    

if __name__=="__main__":
    app.run(debug=True)