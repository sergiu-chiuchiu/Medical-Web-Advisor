from flask import Flask, Response, json

from med_app.routes import UserRoutes
from .extensions import db, ma


def create_app(name=__name__, config_file = 'settings.py'):
    # Init app
    app = Flask(__name__)

    @app.route('/')
    def index():
        response = Response(json.dumps("Hello World!"), 200)
        response.headers["Access-Control-Allow-Origin"] = "*"
        response.headers["Access-Control-Allow-Headers"] = "Content-Type"
        return response


    app.config.from_pyfile(config_file)
    app.register_blueprint(UserRoutes.user)
    ma.init_app(app)
    db.init_app(app)




    @app.cli.command('resetdb')
    def resetdb_command():
        """Destroys and creates the database + tables."""

        from sqlalchemy_utils import database_exists, create_database, drop_database
        if database_exists(app.config['SQLALCHEMY_DATABASE_URI']):
            print('Deleting database.')
            drop_database(app.config['SQLALCHEMY_DATABASE_URI'])
        if not database_exists(app.config['SQLALCHEMY_DATABASE_URI']):
            print('Creating database.')
            create_database(app.config['SQLALCHEMY_DATABASE_URI'])

        print('Creating tables.')
        db.create_all()
        print('Shiny!')

    return app
