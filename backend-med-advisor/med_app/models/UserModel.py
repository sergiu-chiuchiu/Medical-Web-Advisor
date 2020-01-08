from med_app.extensions import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # auto increment by default
    name = db.Column(db.String(100), unique=True)
    description = db.Column(db.String(200))
    password = db.Column(db.String(200))

    def __init__(self, name, description, password):
        self.name = name
        self.description = description
        self.password = password
