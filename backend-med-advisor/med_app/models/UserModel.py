from med_app.extensions import db
from passlib.apps import custom_app_context as pwd_context

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

    @staticmethod
    def hash_password(self, clearPassword):
        self.password = pwd_context.encrypt(clearPassword)

    @staticmethod
    def verify_password(self, clearPassword):
        return pwd_context.verify(clearPassword, self.password)
