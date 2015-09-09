jQuery(document).ready(function($){
	//open popup
	$('.rp-popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.rp-popup').addClass('is-visible');
		$('html').addClass('rp-popup-opened');
	});
	
	//close popup
	$('.rp-popup').on('click', function(event){
		if( $(event.target).is('.rp-popup-close') || $(event.target).is('.rp-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
			$('html').removeClass('rp-popup-opened');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.rp-popup').removeClass('is-visible');
    		$('html').removeClass('rp-popup-opened');
	    }
    });
});