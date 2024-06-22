from flask import json, jsonify, request
from models import Users, db


def root_route(app):
    
    @app.route("/")
    def home():
        return "Oi! Oi!, this is the home pageg"

    @app.route("/post", methods = ["POST"])
    def post_man():
        if request.method == "POST":
            username = request.json['user']
            useremail = request.json['email']
            userpass = request.json['pass']
            
            user_exists = Users.query.filter_by(user_email = useremail).first() is not None
            
            if user_exists:
                return "Email already exists", 409
            
            new_user = Users(username, useremail, userpass)
            db.session.add(new_user)
            db.session.commit()
            return {"msg": "User Created sucessfully"}
