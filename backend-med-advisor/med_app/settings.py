import os
from dotenv import load_dotenv

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
load_dotenv(dotenv_path)

POSTGRES_URL=os.environ.get('POSTGRES_URL')
POSTGRES_USER=os.environ.get('POSTGRES_USER')
POSTGRES_PW=os.environ.get('POSTGRES_PW')
POSTGRES_DB=os.environ.get('POSTGRES_DB')

SQLALCHEMY_DATABASE_URI='postgresql+psycopg2://{user}:{pw}@{url}/{db}'.format(user=POSTGRES_USER,pw=POSTGRES_PW,url=POSTGRES_URL,db=POSTGRES_DB)
SQLALCHEMY_TRACK_MODIFICATIONS=False

# export FLASK_APP=application.py
# export FLASK_ENV=development
# flask run

# to update on aws:
# zappa update dev
