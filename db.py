from flask import Flask,render_template, request
from flask_mysqldb import MySQL
 
app = Flask(__name__)
 
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'password'
app.config['MYSQL_DB'] = 'insurancedata'
 
mysql = MySQL(app)
 
#Creating a connection cursor
#cursor = mysql.connection.cursor()
 
#Executing SQL Statements
#cursor.execute(''' CREATE TABLE table_name(field1, field2...) ''')
#cursor.execute(''' INSERT INTO table_name VALUES(v1,v2...) ''')
#cursor.execute(''' DELETE FROM table_name WHERE condition ''')
 
#Saving the Actions performed on the DB
#mysql.connection.commit()
 
#Closing the cursor
#cursor.close()
