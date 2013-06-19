var settings = require('./settings');
GLOBAL.Handlebars = require('handlebars');
require('./templates/server-templates');

var mongo = require('mongoskin');
var BSON = mongo.BSONPure;
var db = mongo.db('localhost:27017/codelabweb');
var labs = db.collection("lab");
var request = require('request');

var express = require('express');
var app = express()
	.use(express.bodyParser())
	.use('/', express.static(__dirname+'/static'));

app.get("/", function(req,res)	{
	htmlcode = "<h1>Hello World</h1>";
	csscode = "body {background-color:grey;}";
	labs.insert({htmlcode:htmlcode,csscode:csscode},{}, function(err, data) {
		id = data[0]._id;
		res.redirect('/'+id);
	});
});

app.post("/:id", function(req,res)	{
	htmlcode = req.body.htmlcode;
	csscode = req.body.csscode;
	bid = BSON.ObjectID(req.params.id);
	labs.update({"_id":bid}, {$set:{htmlcode:htmlcode,csscode:csscode}}, {upsert:true});
});

app.get("/api", function(req,res) {
	res.header("Access-Control-Allow-Origin","*");
	info = "post /api/svg requires svgcode parameter"
	app.routes.post[1].info = info;
	res.send(app.routes);
});

app.get("/:id", function (req,res)	{
	var template = Handlebars.templates.base;
	var id = req.params.id;
  console.log(id);
	labs.findOne({"_id":BSON.ObjectID(id)}, function(err, data) {
		var html = template({htmlcode:data.htmlcode, csscode:data.csscode, id:id});
		res.send(html);
	});
});

app.listen(settings.port, function() {
	console.log("app running on port", settings.port);
});
