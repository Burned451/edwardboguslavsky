$(document).ready(function() {
	$(".header-logo").load("icons/icon-logo.svg");
	$('.dropdown').append($('<div class="dropdown-icon"></div>').load("icons/icon-menu.svg"));
	$(".title-icon").load("icons/icon-head.svg");
			
	load_page()
	
	$(window).on('hashchange', function() {		
		load_page()
	});
});

$(document).scroll(function() {
	if ($('.title').scrollTop() > 0) $('.header').css('background', 'rgba(0, 0, 0, 0.3)');
	else $('.header').css('background', '');
});​

function toggle_dark_mode(obj) {
	if($(obj).is(":checked")){
		$(':root').css({'--text-black': '#f0f2f4',
						'--text-white': '#f0f2f4',
						'--text-blue': '#88b1df',
						'--text-blue-gray': '#b2b6bb',
						'--background-white': '#0f1925',
						'--background-extra-light-gray': '#090f16',
						'--background-light-gray': '#26405e',
						'--background-gray': '#335b88'});
		$('a.link-page').css('background-image', 'url(icons/icon-link-dark.png)');
	} else {
		$(':root').css({'--text-black': '',
						'--text-white': '',
						'--text-blue': '',
						'--text-blue-gray': '',
						'--background-white': '',
						'--background-extra-light-gray': '',
						'--background-light-gray': '',
						'--background-gray': ''});
		$('a.link-page').css('background-image', 'url(icons/icon-link.png)');
	}
}

function load_page() {
	$(".content").empty();
	switch(window.location.hash) {
		case '#gallery':
			$('title').html('Edward Boguslavsky - Gallery');
			$(".content").load("pages/gallery.html");
			break;
		case '#links':
			$('title').html('Edward Boguslavsky - Links');
			$(".content").load("pages/links.html");
			break;
		case '#about':
			$('title').html('Edward Boguslavsky - About');
			$(".content").load("pages/about.html");
			break;
		case '#eportfolio':
			$('title').html('Edward Boguslavsky - ePortfolio');
			$(".content").load("pages/eportfolio.html");
			break;
		default:
			$('title').html('Edward Boguslavsky - Home');
			$(".content").load("pages/home.html");
	}
}