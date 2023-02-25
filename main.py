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
    
@app.route('/logout')
@login_required
def logout():
    logout_user()
    if 'user' in session:  
      session.pop('user',None)  
    return Response("Logout", status=200, mimetype='text/xml')

@app.route('/')
def home():
    return "home"

@app.route('/add_claim', methods=['POST'])
def addingClaims():
    inputDict = request.get_json()
    for k, v in inputDict.items():
        if v == None:
            inputDict[k] = 'null'

    query = """
            INSERT INTO insuranceclaims
             (ClaimID,
              InsuranceID,
             FirstName,
             LastName,
             ExpenseDate,
             Amount,
             Purpose,
             FollowUp,
             PreviousClaimID,
             Status,
             LastEditedClaimDate)
             values ({},{},"{}","{}","{}",{},"{}",{},{},"{}","{}");
            """.format(inputDict['ClaimID'],
                       inputDict['InsuranceID'],
                       inputDict['FirstName'],
                       inputDict['LastName'],
                       inputDict['ExpenseDate'],
                       inputDict['Amount'],
                       inputDict['Purpose'],
                       inputDict['FollowUp'],
                       inputDict['PreviousClaimID'],
                       inputDict['Status'],
                       inputDict['LastEditedClaimDate'])
    print(query)

    cursor.execute(query)
    connection.commit()
    return "ADDED"

@app.route('/edit_claim/<claim_id>', methods=['GET', 'POST'])
def edit_claim(claim_id):
    if request.method == "POST":
        data = request.get_json()
        cursor.execute("""
            UPDATE insuranceclaims
            SET FirstName =  "{}", 
            LastName = "{}", 
            ExpenseDate = "{}", 
            Amount = {},
            Purpose = "{}",
            FollowUp = {},
            PreviousClaimId = {},
            LastEditedClaimDate = NOW()
            WHERE ClaimId = {};       
        """.format(data['first_name'], data['last_name'], data['date'], data['claim_amt'], data['purpose'],
                   data['follow_up'], data['prev_claim_id'], claim_id))
        connection.commit()

        return "Claim has been successfully updated", 200

    elif request.method == "GET":
        cursor.execute("""
            SELECT FirstName, LastName, ExpenseDate, Amount, Purpose, FollowUp, PreviousClaimId
            FROM insuranceclaims
            WHERE ClaimId = {}
        """.format(claim_id))
        data = cursor.fetchone()
        if data['FollowUp'] == b'\x00':
            data['FollowUp'] = 0
        elif data['FollowUp'] == b'\x01':
            data['FollowUp'] = 1

        return data, 200




if __name__ == '__main__':
    app.run(debug = True)
