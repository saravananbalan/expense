var file = require("fs");
var express = require("express");
var app = express();
app.use(express.static("public"));
app.get("/index.html",function(req,res){
	res.sendFile("/home/saravanan/index.html");
})
app.get("/expense",function (req,res){
response = {
	firstname: req.query.fname,
        password : req.query.pword
};
console.log(response);
res.end(JSON.stringify(response));
file.writeFile('/home/saravanan/Videos/temp.txt',JSON.stringify(response),function (err,response){
	if(err)
		console.error(err);
	console.log("success");
})
})
/*var path = /home/saravanan/Videos/temp.txt';
const storeFile = (response,path)=>{
	try{
		file.writeFileSync('/home/sarvananan/Videos/temp.txt',JSON.Stringify(response));
	}catch(err){
		console.error(err);
	}
}
})*/
var server = app.listen("8081",function (){
	var host = server.address().address
	var port = server.address().port
console.log("Listening port.................");
})

