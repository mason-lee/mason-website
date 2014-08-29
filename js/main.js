$(window).load(function() {
	$(".loader").fadeOut("slow");
});

$(document).ready(function() {
	//Image blur    
	    var $img = $('.bg'),
	    	$window = $(window),
	    	$document = $(document);

	    $(window).scroll(function(e) {
	        var s = $window.scrollTop(),
	            d = $document.height(),
	            c = $window.height();

	        $img.css('-webkit-filter', "blur(" + Math.min(s/360,10) + "px)");
	    });

	$('.flying-text').css({opacity:0}); //set all text opacity to 0

	setTimeout(function() {
	//Text animation
	$('.active-text').delay(1000).animate({ opacity:1, marginTop: "0"}, 2000); //animate first text

	var int = setInterval(changeText, 2500); // call changeText function every 5 seconds

	function changeText() {
		var $activeText = $(".active-text"); //get current text
		var $nextText = $activeText.next();  //get next text

		//if($activeText.next().length == 0) $nextText = $('.flying-text:first'); //if it is last text, loop back to first text

		$activeText.animate({opacity:1}, 2000); //set opacity 0 to animated text
		//$activeText.animate({marginTop: "0"}); //set animated text position to default

		//animate next text
		$nextText.css({opacity: 0})
    				.addClass('active-text')
    				.animate({opacity:1, marginTop: "-5"}, 2000, 
                     function(){
							$activeText.removeClass('active-text')}
     );
	}

	//Smooth scroll down
	$(".jumper").on("click", function(e) {
    	e.preventDefault();
    	$("body, html").animate({ scrollTop: $($(this).attr('href')).offset().top}, 600);
    });
	
	}, 500);
});








