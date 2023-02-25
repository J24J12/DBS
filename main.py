from flask import Flask, request, session, Response
import pymysql 
from flask_login import login_user, login_required, logout_user
 
connection = pymysql.connect(host='localhost', user='root', password='password', database='insurancedata', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor) 
 
app = Flask(__name__) 
app.config['SECRET_KEY'] = '123456'

cursor = connection.cursor() 

@app.route('/login', methods=['GET', 'POST'])
def login():
   data = request.json
   id = data.get('id')
   pw = data.get('password')
   cursor.execute(f'SELECT * FROM User WHERE EmployeeID = "{id}"')
   user = cursor.fetchone()
   if user: 
     if pw == user['Password']:
       login_user(user, remember=True)
       session['user'] = user
       return Response("User is logged in", status=200, mimetype='text/xml')
     else:
         return Response("Password is wrong", status=401, mimetype='text/xml')
   else:
       return Response("User does not exist", status=401, mimetype='text/xml')


if __name__ == '__main__':
    app.run(debug = True)
