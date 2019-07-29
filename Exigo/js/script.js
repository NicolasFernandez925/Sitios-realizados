$(document).ready(function(){


	$('.nav-toggle').on('click', function(){
	$('.side-nav').toggleClass('toggled');
	});

	$('.nav-close').on('click', function(){
		$('.side-nav').removeClass('toggled');
	})

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if (scroll > 100){
			$(".menu").css({"background": "#333"});
			$(".menu").css({"padding": "15px 0"});
		} else {
			$(".menu").css({"background": "transparent"});
			$(".menu").css({"padding": "40px 0"});
		}

	});


	$('.one').hover(function(){
		$('.overlay').slideDown(400);
	}, function(){
		$('.overlay').slideUp(400);
	})

	$('.two').hover(function(){
		$('.overlay2').slideDown(400);
	}, function(){
		$('.overlay2').slideUp(400);
	})

	$('.three').hover(function(){
		$('.overlay3').slideDown(400);
	}, function(){
		$('.overlay3').slideUp(400);
	})

	$('.four').hover(function(){
		$('.overlay4').slideDown(400);
	}, function(){
		$('.overlay4').slideUp(400);
	})

	$('.five').hover(function(){
		$('.overlay5').slideDown(400);
	}, function(){
		$('.overlay5').slideUp(400);
	})

	$('.six').hover(function(){
		$('.overlay6').slideDown(400);
	}, function(){
		$('.overlay6').slideUp(400);
	})

	$('.seven').hover(function(){
		$('.overlay7').slideDown(400);
	}, function(){
		$('.overlay7').slideUp(400);
	})

	$('.eigth').hover(function(){
		$('.overlay8').slideDown(400);
	}, function(){
		$('.overlay8').slideUp(400);
	})

	$('.nine').hover(function(){
		$('.overlay9').slideDown(400);
	}, function(){
		$('.overlay9').slideUp(400);
	})

	$('.ten').hover(function(){
		$('.overlay10').slideDown(400);
	}, function(){
		$('.overlay10').slideUp(400);
	})

	$('.eleven').hover(function(){
		$('.overlay11').slideDown(400);
	}, function(){
		$('.overlay11').slideUp(400);
	})

	$('.twelve').hover(function(){
		$('.overlay12').slideDown(400);
	}, function(){
		$('.overlay12').slideUp(400);
	})

	$('.jack').hover(function(){
		$('.overlay1').slideDown(400);
	}, function(){
		$('.overlay1').slideUp(400);
	})

	$('.moha').hover(function(){
		$('.overlay2').slideDown(400);
	}, function(){
		$('.overlay2').slideUp(400);
	})

	$('.brock').hover(function(){
		$('.overlay3').slideDown(400);
	}, function(){
		$('.overlay3').slideUp(400);
	})

	$('.brock2').hover(function(){
		$('.overlay4').slideDown(400);
	}, function(){
		$('.overlay4').slideUp(400);
	})


});


