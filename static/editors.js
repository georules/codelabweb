var htmlEditor;
var cssEditor;
function createEditors() {
	var options = {tabSize:2,indentUnit:2,lineNumbers:'true'};
	htmlEditor = CodeMirror.fromTextArea(document.getElementById('htmlcode'), 
		$.extend(options,{mode:{name:'xml'}}));
	cssEditor = CodeMirror.fromTextArea(document.getElementById('csscode'), 
		$.extend(options,{mode:{name:'css'}}));

	Inlet(cssEditor);
	
}
