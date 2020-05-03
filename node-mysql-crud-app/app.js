const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
const session = require("express-session");
const {getUsers} = require('./routes/index');
const {getItems} = require('./routes/admin');

var con = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "mysql",
 database: "sslapp"
});

con.connect((err)=>{
	if(err){
		throw err;
	}
	console.log("Connected")
});
global.con = con;
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use(session({secret:"secret",saveUninitialized:true,resave:true}));
var sess;
app.set("view engine","ejs");
app.engine("ejs", require("ejs").__express);
let query = "select * from users"; 
        con.query(query, (err, result) => {
            if (err) {
                res.render('index',{pagename:'home',errors:errors});
            }
            user = result;
        });
app.get("/", getUsers);
app.post("/login",function(req,res){
	var errors = [];
	if(req.body.email == ""){
		errors.push("Email is required");
	}
	if(req.body.password == ""){
		errors.push("Password is required");
	}
	if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)){
		errors.push("Email is not valid");
	}
	if(!/^[a-zA-Z1-9]\w{3,14}$/.test(req.body.password)){
		errors.push("Password is not valid");
	}
	if(req.body.password != user[0].password && req.body.password != "" && req.body.email != user[0].email && req.body.email != ""){
		errors.push("Invalid Login");
	}
	if(req.body.password != user[0].password && req.body.password != "" && req.body.email == user[0].email && req.body.email != ""){
		errors.push("Incorrect Password");
	}
	if(req.body.password == user[0].password && req.body.email == user[0].email){
	   sess =req.session;
	   sess.loggedin = true;
		app.get("/admin", getItems);
		}
	else{
		app.get("/", getUsers);
			}})

app.use(express.static("public"));
var server = app.listen("8080");

