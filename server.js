var settings = require('./settings');
GLOBAL.Handlebars = require('handlebars');
require('./templates/server-templates');

var mongo = require('mongoskin');
var db = mongo.db('localhost:27017/codelabweb');
var images = db.collection("lab");
var request = require('request');

var express = require('express');
var app = express()
	.use(express.bodyParser())
	.use('/', express.static(__dirname+'/static'));

app.get("/", function(req,res)	{
	var template = Handlebars.templates.base;
	var html = template({file:false});
	res.send(html);
});

app.post("/", function(req,res)	{
	try{
	var filename = process_data(req);
	fname = filename.replace(__dirname,"");
	var template = Handlebars.templates.base;
	var html = template({file:fname});
	}
	catch(e) {console.log(e);}
	res.send(html);
});

app.get("/api", function(req,res) {
	res.header("Access-Control-Allow-Origin","*");
	info = "post /api/svg requires svgcode parameter"
	app.routes.post[1].info = info;
	res.send(app.routes);
});

app.listen(settings.port, function() {
	console.log("app running on port", settings.port);
});
