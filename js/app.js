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

	// Sticky
	var stickyNavTop = $('.magellan-container').offset().top;

	var stickyNav = function() {
		var scrollTop = $(window).scrollTop();

		if (scrollTop > stickyNavTop) {
			$('.magellan-container').addClass('sticky');
		} else {
			$('.magellan-container').removeClass('sticky');
		}
	};

	stickyNav();

	$(window).scroll(function() {
		stickyNav();
	});

});