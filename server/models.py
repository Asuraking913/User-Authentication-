from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db = SQLAlchemy()

def create_id():
    return uuid4().hex

class Users(db.Model):
    id = db.Column(db.String(32), unique = True, primary_key = True, default = create_id)
    user_name = db.Column(db.String(200), nullable = False)
    user_email = db.Column(db.String(345), unique = True, nullable = False)
    user_pass = db.Column(db.String(345))

    def __init__(self, name, email):
        self.user_name = name
        self.user_email = email