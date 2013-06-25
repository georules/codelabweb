function refresh()	{
	console.log("refresh called");
	var html = htmlEditor.getValue(); //$("#htmlcode").val();
	var css = "<style type=\"text/css\">"+ cssEditor.getValue() + "</style>";
	$("#showpage").contents().find('head').html(css);
	$("#showpage").contents().find('body').html(html);
}
function resize()	{
	var h = $(window).height() - $('.header').height()-12;
	$(".fill").height(h);
	var w = $("#show").width();
	$("#showpage").css('width',w-15);
}
$(document).ready(function() {
	createEditors();
	resize();	
	refresh();
	$('#htmlcode').keyup(refresh);
	$('#csscode').keyup(refresh);
	htmlEditor.on("change", refresh);
	cssEditor.on("change", refresh);
	$(window).resize(resize);

	$('#dragbar').mousedown(function(e){
        e.preventDefault();
				$("body").append('<div class="tarp"></div>')
        $(document).mousemove(function(e){
				if (e.pageX > 100)	{
          $('#show').css("width",e.pageX);
					resize();
          $('#coding').css("left",e.pageX+2);
					$('#coding').children().css("left",e.pageX+2);
					}
       })
       console.log("leaving mouseDown");
    });
	$(document).mouseup(function(e){
		$('.tarp').remove();
			$(document).unbind('mousemove');
	});

	$('#savebutton').click(function(e) {
		e.preventDefault();
		htmlcode = htmlEditor.getValue();//$('#htmlcode').val(); 
		csscode = cssEditor.getValue();//$('#csscode').val();
		url = $('#labid').val();
		$("#saveit").show();
		$.ajax({
			type: "POST",
			url: url, 
			data: {htmlcode:htmlcode, csscode:csscode},
			complete: function (data) {window.setTimeout(function() {$("#saveit").hide();}, 1000);console.log(data);}
		});
	});

	$('#newlab').click(function(e)	{
		window.location = "/";
	});

});
