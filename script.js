$(document).ready(function() {
	$("#dynamic-content").load("home.html");
	
	//$(".dropdown-content a").click(function(){
	$(window).on('hashchange', function() {		
		$("#dynamic-content").empty();
		switch(window.location.hash) {
			case '#gallery':
				$('title').html('Edward Boguslavsky - Gallery');
				$('.header-title').html('Gallery');
				$('.header-subtitle').html('Photographs I have taken during my travels and spare time');
				$("#dynamic-content").load("gallery.html");
				break;
			case '#links':
				$('title').html('Edward Boguslavsky - Links');
				$('.header-title').html('Links');
				$('.header-subtitle').html('Other enjoyable media to keep you busy');
				$("#dynamic-content").load("links.html");
				break;
			case '#about':
				$('title').html('Edward Boguslavsky - About');
				$('.header-title').html('About');
				$('.header-subtitle').html('Additional information about me and different ways to keep in touch');
				$("#dynamic-content").load("about.html");
				break;
			default:
				$('title').html('Edward Boguslavsky - Home');
				$('.header-title').html('Home');
				$('.header-subtitle').html('An introduction to the site\'s content');
				$("#dynamic-content").load("home.html");
		}
	});
});

function toggle_mobile_view(obj) {
	if($(obj).is(":checked")){
		$("#mobile-wrapper").css({'width': '360px', 'height': '640px'});
	} else {
		$("#mobile-wrapper").css({'width': '', 'height': ''});
	}
}