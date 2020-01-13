import os
import logging
from dotenv import load_dotenv, find_dotenv

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
load_dotenv(dotenv_path)

basedir=os.path.abspath(os.path.dirname(__file__))

POSTGRES_URL=os.environ.get('POSTGRES_URL')
POSTGRES_USER=os.environ.get('POSTGRES_USER')
POSTGRES_PW=os.environ.get('POSTGRES_PW')
POSTGRES_DB=os.environ.get('POSTGRES_DB')

SQLALCHEMY_DATABASE_URI='postgresql+psycopg2://{user}:{pw}@{url}/{db}'.format(user=POSTGRES_USER,pw=POSTGRES_PW,url=POSTGRES_URL,db=POSTGRES_DB)
SQLALCHEMY_TRACK_MODIFICATIONS=False

# export FLASK_APP=application.py
# export FLASK_ENV=development
# flask run

# to deploy on aws:
# zappa update dev

# {
# 	"name": "Gigel3",
# 	"userName":"gig123",
# 	"email": "admin",
# 	"password": "admin"
# }


# class Config(object):
#     DEBUG = False
#     TESTING = False
#     CSRF_ENABLED = True
#     SECRET_KEY = 'this-really-needs-to-be-changed'
#     # SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
#     SQLALCHEMY_TRACK_MODIFICATIONS = False
#     # SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']
#
#
# class ProductionConfig(Config):
#     DEBUG = False
#
#
# class StagingConfig(Config):
#     DEVELOPMENT = True
#     DEBUG = True
#
#
# class DevelopmentConfig(Config):
#     DEVELOPMENT = True
#     DEBUG = True
#
#
# class TestingConfig(Config):
#     TESTING = True