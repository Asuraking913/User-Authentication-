from flask import Flask, request, json, jsonify, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///Users.sqlite3'
cors = CORS(app, origins='*')


db = SQLAlchemy(app)
class Users(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    content = db.Column(db.String(200), nullable=False)

    def __init__(self, content): 
        self.content = content

@app.route("/index")
def index(): 
    return "Yo!! you called"

@app.route("/api/todo", methods = ['GET', 'POST'])
def recv_todo():
    if request.method == "POST":
        requested_data = json.loads(request.data)
        new_content = Users(requested_data['todo'])
        db.session.add(new_content)
        db.session.commit()
    return "Saved your next todo" 

def iterator(todo):
    return {
        "id": todo.id, 
        "content": todo.content
    }

@app.route("/api/todo_list")
def send_todos():
    return jsonify([*map(iterator, Users.query.all())])

@app.route("/api/<int:todo>", methods=['POST'])
def view_to_do(todo):
    return jsonify([*map(iterator, Users.query.filter_by(id = todo))])

@app.route("/api/delete/<int:todo>", methods = ["POST"])
def delete(todo):
    if request.method == "POST":
        requested_data = json.loads(request.data)
        delete_id = requested_data['id']
        Users.query.filter_by(id = delete_id).delete()
        db.session.commit()
    return "Item deleted"



if __name__ == "__main__": 
    with app.app_context():
        db.create_all()
    app.run(debug=True)