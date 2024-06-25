from flask import jsonify, request, json, session
from models import db, Users
from flask_bcrypt import Bcrypt
from flask_session import Session

def root_route(app):

	hasher = Bcrypt(app)
	server_session = Session(app)

	@app.route("/")
	def home(): 
		return "<h1>Oi!! This is the home page</h1>"
	
	@app.route("/api/show", methods = ['POST'])
	def show(): 
		found_user = Users.query.filter_by(user_name = request.json['user']).first()
		return {
			"name": found_user.user_name,
			"email" : found_user.user_email, 
		}
	
	@app.route("/get_user")
	def get_user():
		user_id = session.get('id')
		if user_id:
			return {"msg" : user_id}
		return "No User"

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
			if users.user_email == useremail:
				return {
					"msg": "Email Address Already exists"
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
		
		user_id = session.get('id')
		if user_id:
			response = jsonify({"msg" : "already logged"})
			response.set_cookie('user_id', f'{user_id}')
			return response
		
		print(user_id)
		found_users = Users.query.filter_by(user_name = username)
		if found_users:
			for users in found_users:
				if users.user_name == username:
					if hasher.check_password_hash(users.user_pass, userpass):
						session['id'] = users.id
						response =  jsonify({
							"msg" : "User logged In", 
							"user" : users.user_name
						})

						response.set_cookie('session_token', f'{user_id}')

						return response
					else:
						return {
							"msg" : "Incorrect password"
						}
				else:
					return {
							"msg" : "Incorrect username "
					}
		return {
			"msg" : "Username does not exist"
		}