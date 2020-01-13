from med_app.extensions import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # auto increment by default
    name = db.Column(db.String(100))
    userName = db.Column(db.String(100), unique=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(200))

    def __init__(self, name, userName, email, password):
        self.name = name
        self.userName = userName
        self.email = email
        self.password = password
