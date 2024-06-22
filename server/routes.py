from flask import request
from models import Users, db
from flask_bcrypt import Bcrypt

def root_route(app):

    hasher = Bcrypt(app)

    @app.route("/")
    def home():
        return "<h1>Oi! Oi! this is the home page</h1>"
    
    @app.route("/api/create_user", methods= ['GET', 'POST'])
    def create_user():
        if request.method == "POST":
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
    @app.route("/show")
    def show():
        found_user = Users.query.all()[0]
        return {
            "pass": str(found_user.user_pass)
        }

                
                    