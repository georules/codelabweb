(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['base'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<link href=\"/a/bootstrap.css\" rel=\"stylesheet\">\n<link href=\"/a/bootstrap-responsive.css\" rel=\"stylesheet\">\n<script src=\"/a/jquery-2.0.2.min.js\" type=\"text/javascript\"></script>\n<script src=\"/a/jquery.form.min.js\" type=\"text/javascript\"></script>\n<style>\nhtml,body {\n	height: 100%;\n	min-height: 100%;\n}\n.fill {\n	height:95%;\n	min-height:95%;\n}\n#dragbar{\n   background-color:black;\n   height:100%;\n   float: right;\n   width: 10px;\n   cursor: col-resize;\n}\niframe {\n	border: 0; padding:0; margin: 0;\n}\ntextarea {\n	width:100%; margin:0; padding:0; border-width:0;\n	height:85%;\n}\n#htmlpanel,#csspanel {\n	border: 1px solid black;\n	height:49%;\n	margin-bottom:2px;\n}\n#coding {\n	margin-left:0px;\n}\n.container-fluid {\n	padding:0;\n}\n.header {\n	height:50px;\n	border-bottom:10px solid black;\n	padding-left:10px;\n}\n.tarp {\n	/*background-color:rgba(128,128,128,0.5);*/\n	width:100%;\n	height:100%;\n	position: absolute;\n	top:0;\n	left:0;\n}\n</style>\n\n<script>\nfunction refresh()	{\n	var html = $(\"#htmlcode\").val();\n	var css = \"<style type=\\\"text/css\\\">\" + $(\"#csscode\").val() + \"</style>\";\n	$(\"#showpage\").contents().find('head').html(css);\n	$(\"#showpage\").contents().find('body').html(html);\n}\nfunction resize()	{\n	var h = $(window).height() - $('.header').height()-12;\n	$(\".fill\").height(h);\n	var w = $(\"#show\").width();\n	$(\"#showpage\").css('width',w-15);\n}\n$(document).ready(function() {\n	resize();	\n	refresh();\n	$('#htmlcode').keyup(refresh);\n	$('#csscode').keyup(refresh);\n\n	$(window).resize(resize);\n\n	$('#dragbar').mousedown(function(e){\n        e.preventDefault();\n				$(\"body\").append('<div class=\"tarp\"></div>')\n        $(document).mousemove(function(e){\n				if (e.pageX > 100)	{\n          $('#show').css(\"width\",e.pageX);\n					resize();\n          $('#coding').css(\"left\",e.pageX+2);\n					$('#coding').children().css(\"left\",e.pageX+2);\n					}\n       })\n       console.log(\"leaving mouseDown\");\n    });\n	$(document).mouseup(function(e){\n		$('.tarp').remove();\n			$(document).unbind('mousemove');\n	});\n\n	$('#savebutton').click(function(e) {\n		e.preventDefault();\n		htmlcode = $('#htmlcode').val(); \n		csscode = $('#csscode').val();\n		url = $('#labid').val();\n		$.ajax({\n			type: \"POST\",\n			url: url, \n			data: {htmlcode:htmlcode, csscode:csscode}\n		});\n	});\n\n	$('#newlab').click(function(e)	{\n		window.location = \"/\";\n	});\n\n});\n</script>\n\n</head>\n<body>\n\n<div class=\"container-fluid fill\">\n	<div class=\"row-fluid\">\n		<div class=\"header span12\">\n			<h4 class=\"pull-left\">Code Lab Web: ";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n			<form id=\"saveform\" class=\"pull-right\" action=\"/lab/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" method=\"post\">\n				<input id=\"labid\" type=\"hidden\" value=\"/lab/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n				<input id=\"savebutton\" type=\"submit\" value=\"Save\"/>\n			</form>\n			<input type=\"button\" class= \"pull-right\" id=\"newlab\" value=\"New\"/>\n		</div>\n	</div>\n	<div class=\"main row-fluid fill\">\n		<div id=\"show\" class=\"span8 fill\">\n			<iframe id=\"showpage\" class=\"fill\"></iframe>\n			<div id=\"dragbar\"></div>\n		</div>\n		<div id=\"coding\" class=\"span4 fill\">\n			<div id=\"htmlpanel\">\n				<h5>HTML</h5>\n				<textarea id=\"htmlcode\" width=\"100%\">";
  if (stack1 = helpers.htmlcode) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.htmlcode; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n			</div>\n			<div id=\"csspanel\">\n				<h5>CSS</h5>\n				<textarea id=\"csscode\" width=\"100%\">";
  if (stack1 = helpers.csscode) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.csscode; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n			</div>\n		</div>\n	</div>\n</div>\n\n<div id=\"#output\"></div>\n\n</body>\n</html>\n";
  return buffer;
  });
})();
