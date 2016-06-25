var is_list = false;
var contentX = 0;
(function($) { 
	$(document).ready(function() {
		is_list = ( $("#newswrap .thumbcontent:first").css('position') != 'absolute' );
		contentX = $("#content-container:first").offset();
    
    var leftCorrection = contentX.left + $('#rightcol').outerWidth(); // correct for right sidebar
    var topCorrection = contentX.top;
		
		/*
		*	Show / hide tooltip
		*/
		$(".pthumb").hover(
			function() {
				if (is_list) { return; }
				$(this).next().show();
			},
			function() {
				if (is_list) { return; }
				$(this).next().hide(); 
			}
		).mousemove(function(e){
			if (is_list) { return; }
			$(this).next().css({
				'left':	e.pageX - leftCorrection,
				'top':	e.pageY - topCorrection
			})
		});

		$(".cattitle-collapse").click(function () {
			$(this).toggleClass("collapse");
			$("#category-list").slideToggle("slow");
		});
	});
})(jQuery);
