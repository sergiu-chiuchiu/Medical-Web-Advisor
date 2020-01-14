from flask import Blueprint, request, jsonify, abort, g, redirect, url_for, make_response, Response
from med_app.extensions import db
from med_app.models.UserModel import User
from med_app.schema import user_schema, users_schema
from flask_httpauth import HTTPBasicAuth

auth = HTTPBasicAuth()
user = Blueprint('user', __name__)


@user.route('/api/token')
@auth.login_required
def get_auth_token():
    token = g.user.generate_auth_token()
    return jsonify({ 'token': token.decode('ascii') })


@auth.verify_password
def verify_password(username_or_token, password):
    # first try to authenticate by token
    user = User.verify_auth_token(username_or_token)
    if not user:
        # try to authenticate with username/password
        user = User.query.filter_by(userName = username_or_token).first()
        if not user or not user.verify_password(password):
            return False
    g.user = user
    return True


@user.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']

    if password is None or email is None:
        abort(400)  # missing arguments

    found_user = User.query.filter_by(email=email).first()

    if found_user is None:
        abort(400) # no user with that email address

    if not found_user.verify_password(password):
        abort(400)

    token = found_user.generate_auth_token()
    # then credentials are correct

    return jsonify(sessionId='{}'.format(token))


# Create user
@user.route('/user', methods=['POST'])
def register_user():
    name = request.json['name']
    userName = request.json['userName']
    email = request.json['email']
    password = request.json['password']

    if userName is None or email is None or request.json['password'] is None:
        abort(400)  # missing arguments

    if User.query.filter_by(userName=userName).first() is not None or User.query.filter_by(email=email).first():
        abort(400)  # existing user or email

    new_user = User(name, userName, email)
    new_user.hash_password(password)

    db.session.add(new_user)
    db.session.commit()

    return user_schema.jsonify(new_user), 201


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
