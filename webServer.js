var fs = require("fs");
var http = require("http");
var path = require("path"); 
var url = require("url");


http.createServer(function(req,res){

		var parsedUrl = url.parse(req.url);
		var filename = path.parse(parsedUrl.pathname);
		if(filename.name ==""){
		 filen = "creative";
		}
		else if(filename.name =="about"){
		 filen = "agentcy";
		}
		else if(filename.name =="stuff"){
		 filen = "greyscale";
		}
		
	fs.readFile(filen+".html",function(err, data){

		res.writeHead(200) 
		res.write("<script>document.getElementById('currpage').style.color = 'yellow';</script>");
		res.end(data)

	})

}).listen("8080")
