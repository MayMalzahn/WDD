"use strict";

var fs = require("fs");
var http = require("http");
var path = require("path"); 
var url = require("url");

var express = require("express");
var request = require("request");
let ejs = require("ejs");
const router = express.Router();
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const session = require("express-session");
app.use(session({secret:"secret",saveUninitialized:true,resave:true}));
var sess;


app.set("view engine","ejs");
app.engine("ejs", require("ejs")._express);

router.get("/",function(req,res){
	sess = req.session;
	res.render("index", {pagename:"home",sess:sess});
})

router.get("/about",function(req,res){
	sess = req.session;
	res.render("about", {pagename:"about",sess:sess});
})

router.get("/stuff",function(req,res){
	sess = req.session;
	res.render("stuff", {pagename:"stuff",sess:sess});
})

router.get("/profile",function(req,res){
	sess = req.session;
	if(typeof(sess)=="undefined" || sess.loggedin != true){
		var errors = ["Not authenticated user"];
		res.render("index",{pagename:"Home", errors:errors});
	}
	else{
		res.render("profile", {pagename:"profile",sess:sess});
	}
})

router.get("/logout",function(req, res){
	sess=req.session;
	sess.destroy(function(err){
		res.redirect("/");
	});
})

router.post("/login",function(req,res){
	var errors = [];
	if(req.body.email == ""){
		errors.push("Email is required");
	}
	if(req.body.password == ""){
		errors.push("Password is required");
	}
	if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}+$/.test(req.body.email)){
		errors.push("Email is not valid");
	}
	if(!/^[a-zA-Z]\w{3,14}$/.test(req.body.password)){
		errors.push("Password is not valid");
	}
	if(req.body.password == "abc123" && req.body.email == "Mike@aol.com"){
	   sess =req.session;
	   sess.loggedin = true;
	   res.render('profile',{pagename:'profile',sess:sess});
	   }
	else{
		res.render('index',{pagename:'home',errors:errors});
			}
	
	
})
app.use(express.static("public"));
app.use("/", router);
var server = app.listen("8080");