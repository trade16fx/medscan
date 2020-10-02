jQuery(document).ready(function($) {
	$('.js-collapse-btn').click(function(event) {		
		$(this).parent().prev('.js-collapse').slideToggle();		
	});
});



