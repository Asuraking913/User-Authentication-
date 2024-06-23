from flask import request, session
from models import Users, db
from flask_bcrypt import Bcrypt
from flask_session import Session

def root_route(app):

    hasher = Bcrypt(app)
    server_session = Session(app)

    @app.route("/")
    def home():
        print(session.get("id"), 'THis id ')
        return "<h1>Oi! Oi! this is the home page</h1>"
    
    @app.route("/api/create_user", methods= ['POST'])
    def create_user():
        username = request.json['user']
        userpass = request.json['pass']
        useremail = request.json['email']

        user_exists = Users.query.all()

        for user in user_exists:
            if user.user_name == username: 
                return { "msg" : "This username has been taken" }
            if user.user_email == useremail:
                return {"msg": "This email address has already been taken"}
            
        new_user = Users(username, useremail)
        db.session.add(new_user)
        db.session.commit()
        new_user.user_pass = hasher.generate_password_hash(userpass)
        db.session.commit()
        return {
            "msg": "Users Created Sucessfully"
        }
    
    @app.route("/api/login", methods = ['POST'])
    def login():
        if request.method == "POST":
            useremail = request.json['email']
            userpass = request.json['pass']

            founder_user = Users.query.filter_by(user_email = useremail).all()

            if not founder_user:
                return {
                    "msg": "Incorrect email address"
                }
            else:
                for users in founder_user:
                    if hasher.check_password_hash(users.user_pass, userpass): 
                        session['id'] = users.id
                        return {
                            "msg": "User is logged in"
                        }
                    else: 
                        return {
                            "msg": "Incorrect Password"
                        }