from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS


# Init marshmallow
ma = Marshmallow()
# Init db
db = SQLAlchemy()
cors = CORS()
