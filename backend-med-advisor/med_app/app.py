from flask import Flask

from med_app.routes import UserRoutes
from .extensions import db, ma


def create_app(config_file = 'settings.py'):
    # Init app
    app = Flask(__name__)

    app.config.from_pyfile(config_file)
    app.register_blueprint(UserRoutes.user)
    ma.init_app(app)
    db.init_app(app)

    return app
