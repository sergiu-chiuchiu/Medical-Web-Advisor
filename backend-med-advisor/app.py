from datetime import datetime

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

# Init app
app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))

# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Init db
db = SQLAlchemy(app)
# Init marshmallow
ma = Marshmallow(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # auto increment by default
    name = db.Column(db.String(100), unique=True)
    description = db.Column(db.String(200))
    password = db.Column(db.String(200))

    def __init__(self, name, description, password):
        self.name = name
        self.description = description
        self.password = password


class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'description')


# Init schema
user_schema = UserSchema()
users_schema = UserSchema(many=True)

populate = False

# Delete database file if it exists currently
if os.path.exists("db.sqlite"):
    os.remove("db.sqlite")
    populate = True
# Create the database
db.create_all()


def populate_users():
    USERS = [
        {"name": "Doug", "description": "Smart, creative", "password": "admin"},
        {"name": "Andrew", "description": "love2code", "password": "admin"},
        {"name": "Lucy", "description": "sports & code", "password": "admin"},
    ]

    for user in USERS:
        u = User(name=user.get("name"), description=user.get("description"), password=user.get("password"))
        db.session.add(u)

    db.session.commit()


if populate:
    populate_users()


# Create user
@app.route('/user', methods=['POST'])
def add_user():
    name = request.json['name']
    description = request.json['description']
    password = request.json['password']

    new_user = User(name, description, password)

    db.session.add(new_user)
    db.session.commit()

    return user_schema.jsonify(new_user)


# Get all users
@app.route('/user', methods=['GET'])
def get_all_users():
    all_users = User.query.all()
    result = users_schema.dump(all_users)
    return jsonify(result)


# Get single user
@app.route('/user/<id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    return user_schema.jsonify(user)


# Update a user
@app.route('/user/<id>', methods=['PUT'])
def update_user(id):
    user = User.query.get(id)
    name = request.json['name']
    description = request.json['description']
    password = request.json['password']

    user.name = name
    user.description = description
    user.password = password

    db.session.commit()
    return user_schema.jsonify(user)


# Delete User
@app.route('/user/<id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()
    return user_schema.jsonify(user)


# Delete all Users
@app.route('/user', methods=['DELETE'])
def delete_all_users():
    try:
        num_rows_deleted = db.session.query(User).delete()
        db.session.commit()
    except:
        db.session.rollback()
    return str(num_rows_deleted) + " records successfully deleted"


# Run server
if __name__ == "__main__":
    app.run(debug=True)
