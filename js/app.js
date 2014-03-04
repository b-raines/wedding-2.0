// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function() {

	// Parallax scroll
	$('.parallax').each(function(){
		var $bgobj = $(this);
		$(window).scroll(function() {
			var yPos = -( ( $(window).scrollTop() - $bgobj.offset().top) / $bgobj.data('speed')); 
			var coords = '50% '+ yPos + 'px';
			$bgobj.css({ backgroundPosition: coords });
		}); 
	});

	// set sticky nav container offset
	var navHeight = $('.magellan-container').outerHeight() - 10;
	var stickyNavTop = $('.first').outerHeight() - navHeight - 10;

	var stickyNav = function(navTop) {
		// set scrolltop position
		var scrollTop = $(window).scrollTop();

		// add sticky class to logo
		if (scrollTop > navHeight) {
			$('.logo').addClass('sticky-logo');
		} else {
			$('.logo').removeClass('sticky-logo');
		}

		// add sticky class if top of nav container hits top of window
		if (scrollTop > navTop) {
			$('.magellan-container').addClass('sticky');
		} else {
			$('.magellan-container').removeClass('sticky');
		}
	}


	var maidsClick = function() {
		$('#maids-pics').click(function(event) {
			event.preventDefault();
			$('.maids-pics').show();
			$('.party').animate({
				left: '100%'
			}, function() {
				$('.maids-pics').find('button').show();
			});
		});
	}

	var maidsHide = function() {
		$('#maids-hide').click(function(event) {
			event.preventDefault();
			$('.maids-pics').find('button').hide();
			$('.party').animate({
				left: '0'
			}, function() {
				$('.maids-pics').hide();
			});
		});
	}

	var menClick = function() {
		$('#men-pics').click(function(event) {
			event.preventDefault();
			$('.men-pics').show();
			$('.party').animate({
				left: '-100%'
			}, function() {
				$('.men-pics').find('button').show();
			});
		});
	}

	var menHide = function() {
		$('#men-hide').click(function(event) {
			event.preventDefault();
			$('.men-pics').find('button').hide();
			$('.party').animate({
				left: '0'
			}, function() {
				$('.men-pics').hide();
			});
		});
	}

	maidsClick();
	maidsHide();
	menClick();
	menHide();

	var maidsHover = function() {
		$('.maids').hover(function() {
			$(this).find('h2').addClass('party-hover');
		}, function() {
			$(this).find('h2').removeClass('party-hover');
		});
	}

	var menHover = function() {
		$('.men').hover(function() {
			$(this).addClass('men-hover');
		}, function() {
			$(this).removeClass('men-hover');
		});
	}

	maidsHover();
	menHover();

	// init stickynav
	stickyNav(stickyNavTop);

	// reset nav container offset on browser resize
	$(window).resize(function() {
		stickyNavTop = $('.first').outerHeight() - $('.magellan-container').outerHeight();
		stickyNav(stickyNavTop);
	});

	// reset scrolltop on scroll
	$(window).scroll(function() {
		stickyNav(stickyNavTop);
	});

});