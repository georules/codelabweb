(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['base'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<link href=\"/a/bootstrap.css\" rel=\"stylesheet\">\n<!--link href=\"/a/bootstrap-responsive.css\" rel=\"stylesheet\"-->\n<link href=\"/a/lib/codemirror/codemirror.css\" rel=\"stylesheet\">\n<link href=\"/a/custom.css\" rel=\"stylesheet\">\n<script src=\"/a/jquery-2.0.2.min.js\" type=\"text/javascript\"></script>\n<script src=\"/a/jquery.form.min.js\" type=\"text/javascript\"></script>\n</head>\n<body>\n\n<div class=\"container-fluid fill\">\n	<div class=\"row-fluid\">\n		<div class=\"header span12\">\n			<h4 class=\"pull-left\">Code Lab Web: ";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n			<div class=\"pull-right\" id=\"saveit\" style=\"display:none;\"><img src=\"/a/ajax-spinner.gif\"></div>\n			<form id=\"saveform\" class=\"pull-right\" action=\"/lab/";
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
    + "</textarea>\n			</div>\n		</div>\n	</div>\n</div>\n\n<div id=\"#output\"></div>\n\n<input type=\"text\" id=\"namefield\">\n\n<script src=\"/a/lib/codemirror/codemirror.js\" type=\"text/javascript\"></script>\n<script src=\"/a/lib/codemirror/mode/xml.js\" type=\"text/javascript\"></script>\n<script src=\"/a/lib/codemirror/mode/css.js\" type=\"text/javascript\"></script>\n<script src=\"/a/lib/inlet.min.js\" type=\"text/javascript\"></script>\n<script src=\"/a/editors.js\" type=\"text/javascript\"></script>\n<script src=\"/a/interaction.js\" type=\"text/javascript\"></script>\n\n<script src=\"/channel/bcsocket.js\"></script>\n<script src=\"/share/share.uncompressed.js\"></script>\n<script src=\"/share/cm.js\"></script>\n<script>\nvar doc = null, editor = null;\n\nfunction setDoc(docName) {\n  document.title = \"ShareJS+CodeMirror: \" + docName;\n  // don't set the standard one or we'll create two entries in the users history\n  if(docName != \"cm\")\n    location.hash = docName;\n\n  sharejs.open(docName, 'text', function(error, newDoc) {\n      if (doc !== null) {\n          doc.close();\n          doc.detach_cm();\n      }\n\n      doc = newDoc;\n\n      if (error) {\n          console.error(error);\n          return;\n      }\n      doc.attach_cm(htmlEditor);\n  });\n};\n\nwindow.onload = function() {\n  editor = htmlEditor;\n  var namefield = document.getElementById('namefield');\n\n  var docName = location.hash.substr(1);\n  if(docName.length < 1)\n    docName = 'cm';\n  setDoc(docName);  // Hooking ShareJS and CodeMirror for the first time.\n  namefield.value = docName;\n\n  function namefieldChanged() {\n      var docName = namefield.value;\n      if (docName) setDoc(docName);\n  }\n\n  if (namefield.addEventListener) {\n      namefield.addEventListener('input', namefieldChanged, false);\n  } else {\n      namefield.attachEvent('oninput', namefieldChanged);\n  }\n};\n</script>\n\n</body>\n</html>\n";
  return buffer;
  });
templates['error'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<link href=\"/a/bootstrap.css\" rel=\"stylesheet\">\n<link href=\"/a/custom.css\" rel=\"stylesheet\">\n<link href=\"/a/bootstrap-responsive.css\" rel=\"stylesheet\">\n<script src=\"/a/jquery-2.0.2.min.js\" type=\"text/javascript\"></script>\n<script src=\"/a/jquery.form.min.js\" type=\"text/javascript\"></script>\n</head>\n<body>\n\n<div class=\"container-fluid fill\">\n	<div class=\"row-fluid\">\n		<div class=\"header span12\">\n			<h4 class=\"pull-left\">Code Lab Web Error :(</h4>\n			<input type=\"button\" class= \"pull-right\" id=\"newlab\" value=\"New\"/>\n		</div>\n	</div>\n	<div class=\"main row-fluid fill\">\n		<div id=\"show\" class=\"span8 fill\">\n			<iframe id=\"showpage\" class=\"fill\"></iframe>\n			<div id=\"dragbar\"></div>\n		</div>\n		<div id=\"coding\" class=\"span4 fill\">\n			<div id=\"htmlpanel\">\n				<h5>HTML</h5>\n				<textarea id=\"htmlcode\" width=\"100%\">503 - Service Unavailible</textarea>\n			</div>\n			<div id=\"csspanel\">\n				<h5>CSS</h5>\n				<textarea id=\"csscode\" width=\"100%\">body{font-family:Monospace;}</textarea>\n			</div>\n		</div>\n	</div>\n</div>\n\n<div id=\"#output\"></div>\n\n<script src=\"/a/interaction.js\" type=\"text/javascript\"></script>\n\n</body>\n</html>\n";
  });
})();
