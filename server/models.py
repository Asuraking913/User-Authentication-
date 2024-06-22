from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db = SQLAlchemy()
def create_id():
    return uuid4()

class Users(db.Model):
    id = db.Column(db.Integer, primary_key = True, nullable = False, default=create_id())
    user_name = db.Column(db.String(200))
    user_email = db.Column(db.String(345), nullable = False)
    user_pass = db.Column(db.String(), nullable = False)

    def __init__(self, name, email, password):
        self.user_name = name
        self.user_email = email
        self.user_pass = password
