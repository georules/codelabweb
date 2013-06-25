var htmlEditor;
var cssEditor;
function createEditors() {
	var options = {indentUnit:2,lineNumbers:'true'};
	htmlEditor = CodeMirror.fromTextArea(document.getElementById('htmlcode'), options);
	cssEditor = CodeMirror.fromTextArea(document.getElementById('csscode'), options);
}
