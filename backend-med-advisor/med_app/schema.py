from .extensions import ma


class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'description')


# Init schema
user_schema = UserSchema()
users_schema = UserSchema(many=True)