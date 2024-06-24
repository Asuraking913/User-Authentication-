from flask import Flask
from routes import root_route
from models import db
from config import Appconfig
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, cross_origin = "*")
app.config.from_object(Appconfig)
root_route(app)


if __name__ == "__main__": 
	with app.app_context():
		db.init_app(app)
		db.create_all()
	app.run(debug = True, port = 2000)