from .extensions import ma


class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'userName', 'email', 'name')


# Init schema
user_schema = UserSchema()
users_schema = UserSchema(many=True)