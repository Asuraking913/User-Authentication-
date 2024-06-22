from flask import Flask
from models import db, Users
from routes import root_route
from config import AppConfig

app = Flask(__name__)
app.config.from_object(AppConfig)
root_route(app)

if __name__ == "__main__":
    with app.app_context():
        db.init_app(app)
        db.create_all()
    app.run(debug=True)