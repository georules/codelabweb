function refresh()	{
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
function fixresize()	{
	w = $('.main').width() - $('#show').width()-10;
	$('#coding').css("width",w + 'px');
	h = $('#show').height();
	h2 = h / 2 - 50;
	$('#coding').height(h);
	htmlEditor.setSize(w,h2);
	cssEditor.setSize(w,h2);
}

function resizewindow(e)	{
	var w = $(window).width();
	var h = $(window).height();
	var codew = $("#coding").width();
	var ww = Math.max(w - codew-10,200);
	$("#show").width(ww);
	$("#coding").width(codew);
	resize();
	fixresize();
}

function redo()	{
	resize();
	fixresize();
	refresh();
}

$(document).ready(function() {
	
	createEditors();
	redo();
	$('#htmlcode').keyup(refresh);
	$('#csscode').keyup(refresh);
	htmlEditor.on("change", refresh);
	cssEditor.on("change", refresh);
	$(window).on("resize",resizewindow);
	$('#dragbar').mousedown(function(e){
        e.preventDefault();
				$("body").append('<div class="tarp"></div>')
        $(document).mousemove(function(e){
				if (e.pageX > 200)	{
          $('#show').css("width",e.pageX);
					resize();
          $('#coding').css("left",e.pageX+2);
					$('#coding').children().css("left",e.pageX+2);
					w = $('.main').width() - $('#show').width()-10;
					fixresize();
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
