import os
from med_app.app import create_app

application = create_app(__name__, config_file = 'settings.py')

if __name__ == "__main__":
    application.run(threaded=True)