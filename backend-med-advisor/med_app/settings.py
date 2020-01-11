import os
basedir=os.path.abspath(os.path.dirname(__file__))

POSTGRES_URL="postgresql-database-1.cmti0gwdpudb.eu-central-1.rds.amazonaws.com"
POSTGRES_USER="postgres"
POSTGRES_PW="kmadsftw"
POSTGRES_DB="med_app_db"

SQLALCHEMY_DATABASE_URI='postgresql+psycopg2://{user}:{pw}@{url}/{db}'.format(user=POSTGRES_USER,pw=POSTGRES_PW,url=POSTGRES_URL,db=POSTGRES_DB)
# print("############################################3")
# print(SQLALCHEMY_DATABASE_URI)


SQLALCHEMY_TRACK_MODIFICATIONS=False
# export FLASK_APP=med_app/app.py
# export FLASK_ENV=development
#  flask run
# user: postgres
# pass: kmadsftw
# DB_URL = 'postgresql+psycopg2://{user}:{pw}@{url}/{db}'.format(user=POSTGRES_USER,pw=POSTGRES_PW,url=POSTGRES_URL,db=POSTGRES_DB)



class Config(object):
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
    SECRET_KEY = 'this-really-needs-to-be-changed'
    # SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    # SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']


class ProductionConfig(Config):
    DEBUG = False


class StagingConfig(Config):
    DEVELOPMENT = True
    DEBUG = True


class DevelopmentConfig(Config):
    DEVELOPMENT = True
    DEBUG = True


class TestingConfig(Config):
    TESTING = True