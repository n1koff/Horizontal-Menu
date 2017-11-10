$('.burger-btn').on('click', function() {
	$('nav').stop();
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		$('nav').slideUp();
	} else {
		$(this).addClass('active');
		$('nav').slideDown();
	}
});

$(window).on('resize', function() {
	if ($(window).width() > 1024) {
		$('.burger-btn').removeClass('active')
		$('nav').removeAttr('style')
	}
});