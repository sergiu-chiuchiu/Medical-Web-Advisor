from flask import Blueprint, request, jsonify, abort
from med_app.extensions import db
from med_app.models.UserModel import User
from med_app.schema import user_schema, users_schema

user = Blueprint('user', __name__)

@user.route('/login', methods=['POST'])
def login():
    if request.json['password'] is None or request.json['email'] is None:
        abort(400)  # missing arguments

    email = request.json['email']
    password = User.hash_password(request.json['password'])

    return user_schema.jsonify(new_user)

# Create user
@user.route('/user', methods=['POST'])
def add_user():
    # TODO add check if the email and username already exists
    if request.json['userName'] is None or request.json['email'] is None:
        abort(400)  # missing arguments
    name = request.json['name']
    userName = request.json['userName']
    email = request.json['email']
    password = request.json['password']

    new_user = User(name, userName, email, password)

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
    userName = request.json['userName']
    email = request.json['email']
    password = request.json['password']

    user.name = name
    user.userName = userName
    user.email = email
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
