import os
basedir = os.path.abspath(os.path.dirname(__file__))

# FLASK_APP = 'main.py'
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
SQLALCHEMY_TRACK_MODIFICATIONS = False