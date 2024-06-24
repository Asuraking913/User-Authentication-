from flask import request, json
from models import db, Users
from flask_bcrypt import Bcrypt

def root_route(app):

	hasher = Bcrypt(app)

	@app.route("/")
	def home(): 
		return "<h1>Oi!! This is the home page</h1>"
	
	@app.route("/show")
	def show(): 
		found_user = Users.query.all()[0]
		return {
			"name": found_user.user_name,
			"email" : found_user.user_email, 
			"id" : found_user.id, 
			"pass" : str(found_user.user_pass)
		}
			

	@app.route("/api/register", methods = ['POST'])
	def register_user():
		username = request.json['user']
		useremail = request.json['email']
		userpass = request.json['pass']
		userpass = hasher.generate_password_hash(userpass)
		found_user = Users.query.all()
		for users in found_user:
			if users.user_name == username:
				return {
					"msg": "User Name Already exists"
				}
		new_user = Users(username, userpass)
		db.session.add(new_user)
		db.session.commit()
		new_user.user_email = useremail
		db.session.commit()

		return {
			"msg" : "Created User"
		}
	
	@app.route("/api/login", methods = ['POST'])
	def login():
		username = request.json['user']
		userpass = request.json['pass']
		
		found_users = Users.query.all()
		for users in found_users:
			if users.user_name == username:
				if hasher.check_password_hash(users.user_pass, userpass):
					return {
						"msg" : "User is logged in"
					}
				else:
					return {
						"msg" : "Incorrect password"
					}
			else:
				return {
						"msg" : "Incorrect email address"
					}