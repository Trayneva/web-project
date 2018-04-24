var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const port=3000;

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'db_user',
	password: 'db_user_pwd'
	});
	
connection.connect();
connection.query('use database');

var client = mysql.createClient();
client.host='127.0.0.1';
client.port= '3306';
client.user='someuser';
client.password='userpass';
client.database='node';

//application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(__dirname + "/public"));

app.post("/vvv",urlencodedParser, function (request, response) {
if(!request.body) return response.sendStatus(400);
console.log(request.body);
response.send(`${request.body.userName}  ${request.body.userLName}  ${request.body.userAge} `);
}); 
app.put('/user', function(request, response)){
	res.send('Got a Put request at /user');
});
app.get("/", function(request, response){

response.send("<h1>Sent</h1>");
});
app.listen(port, ()=>{console.log(`port=${port}`)});
