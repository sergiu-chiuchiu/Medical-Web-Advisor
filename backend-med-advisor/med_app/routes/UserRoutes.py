from flask import Blueprint, request, jsonify
from med_app.extensions import db
from med_app.models.UserModel import User
from med_app.schema import user_schema, users_schema

user = Blueprint('user', __name__)


# Create user
@user.route('/user', methods=['POST'])
def add_user():
    name = request.json['name']
    description = request.json['description']
    password = request.json['password']

    new_user = User(name, description, password)

    db.session.add(new_user)
    db.session.commit()
    return user_schema.jsonify(new_user)


# Get all users
@user.route('/user', methods=['GET'])
def get_all_users():
    all_users = User.query.all()
    result = users_schema.dump(all_users)
    return jsonify(result)


# Get single user
@user.route('/user/<id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    return user_schema.jsonify(user)


# Update a user
@user.route('/user/<id>', methods=['PUT'])
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
@user.route('/user/<id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()
    return user_schema.jsonify(user)


# Delete all Users
@user.route('/user', methods=['DELETE'])
def delete_all_users():
    try:
        num_rows_deleted = db.session.query(User).delete()
        db.session.commit()
    except:
        db.session.rollback()
    return str(num_rows_deleted) + " records successfully deleted"