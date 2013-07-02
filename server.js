var settings = require('./settings');
Handlebars = require('handlebars');
require('./templates/server-templates');

var mongo = require('mongoskin');
var BSON = mongo.BSONPure;
var db = mongo.db('localhost:27017/codelabweb');
var labs = db.collection("lab");
var request = require('request');

var express = require('express');
var app = express()
	.use(express.bodyParser())
	.use('/a', express.static(__dirname+'/static'));

function error(req,res)	{
	var template = Handlebars.templates.error;
	res.send(template({}));
}

app.get("/", function(req,res)	{
	try {
	//htmlcode = "<h1>Hello World</h1>";
	//csscode = "body {\n\tbackground-color:#C0C0C0;\n}";
	htmlcode = csscode = "";
	labs.insert({htmlcode:htmlcode,csscode:csscode},{}, function(err, data) {
		id = data[0]._id;
		res.redirect('/lab/'+id);
	});
	}
	catch (e)	{
		error(req,res);
	}
});

app.post("/lab/:id", function(req,res)	{
	htmlcode = req.body.htmlcode;
	csscode = req.body.csscode;
	bid = BSON.ObjectID(req.params.id);
	labs.update({"_id":bid}, {$set:{htmlcode:htmlcode,csscode:csscode}}, {upsert:true});
	var up = {"save":true};
	res.send(up);
});

app.get("/api", function(req,res) {
	res.header("Access-Control-Allow-Origin","*");
	res.send(app.routes);
});

app.get("/lab/:id", function (req,res)	{
	var template = Handlebars.templates.base;
	var id = req.params.id;
	labs.findOne({"_id":BSON.ObjectID(id)}, function(err, data) {
		var html = template({htmlcode:data.htmlcode, csscode:data.csscode, id:id});
		res.send(html);
	});
});

app.get("/error", error);

app.listen(settings.port, function() {
	console.log("app running on port", settings.port);
});
