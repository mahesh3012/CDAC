from flask import Flask
from werkzeug.security import generate_password_hash, check_password_hash

app=Flask(__name__)

@app.route("/<password>")
def generate_hash(password):
    return generate_password_hash(password)


if __name__=="__main__":
    app.run(debug=True,port=7000)