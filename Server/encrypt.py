import base64

username="mahesh"
password="123456789"

print(base64.b64encode(username.encode()),"  ", base64.b64encode(password.encode()))
encrypted_username=base64.b64encode(username.encode())
encrypted_password=base64.b64encode(password.encode())

print(base64.decodebytes(encrypted_username).decode()," ",base64.decodebytes(encrypted_password).decode())