var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const port=3000;


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