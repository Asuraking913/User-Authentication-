from flask import Flask
from models import db, Users
from routes import root_route
from config import AppConfig
from datetime import timedelta

app = Flask(__name__)
app.config.from_object(AppConfig)
app.secret_key = "@#$@#$@#$"
app.permanent_session_lifetime = timedelta(minutes=4)
root_route(app)

if __name__ == "__main__":
    with app.app_context():
        db.init_app(app)
        db.create_all()
    app.run(debug=True)