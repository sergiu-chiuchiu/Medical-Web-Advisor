from med_app.extensions import db
from passlib.apps import custom_app_context as pwd_context
from itsdangerous import (TimedJSONWebSignatureSerializer
                          as Serializer, BadSignature, SignatureExpired)
import os


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # auto increment by default
    name = db.Column(db.String(100))
    userName = db.Column(db.String(100), unique=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(200))

    def __init__(self, name="", userName="", email="", password=""):
        self.name = name
        self.userName = userName
        self.email = email
        self.password = password

    def hash_password(self, clear_password):
        self.password = pwd_context.encrypt(clear_password)

    def verify_password(self, clear_password):
        return pwd_context.verify(clear_password, self.password)

    def generate_auth_token(self, expiration=6000):
        s = Serializer(os.environ.get('SECRET_KEY'), expires_in=expiration)
        return s.dumps({'id': self.id})

    @staticmethod
    def verify_auth_token(token):
        s = Serializer(os.environ.get('SECRET_KEY'))
        try:
            data = s.loads(token)
        except SignatureExpired:
            return None  # valid token, but expired
        except BadSignature:
            return None  # invalid token
        user = User.query.get(data['id'])
        return user
