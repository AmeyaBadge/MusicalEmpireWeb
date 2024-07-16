$(document).ready(function(){
	function myf(){
		alert("hi");
	}
	$('.nav-link').on('click',function(){
		$('.navbar-collapse').collapse('hide');
	})
	if($(window).width() < 992){


		$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
	
		$('.glow').removeClass("glow");
	
	}else{


		$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 63
        }, 1000);
    }
});
	}

		
	// **********  Navbar Scroll Functions **********	
	$(window).on("scroll",function(){
		if($(window).scrollTop() > 100){
			$('.navbar').addClass("fixed-top");
			$('.navbar').addClass("flipInX");
		}else{
			$('.navbar').removeClass("fixed-top");
			$('.navbar').removeClass("flipInX");
		}
	});


	
});