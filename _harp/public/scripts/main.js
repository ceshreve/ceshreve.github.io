$(document).ready(function(){
	$(function(){
			$('a').each(function(){
					if (($(this).prop('href') == window.location.href) && ($(this).prop("id") != "home_button") ) {
							$(this).addClass('active');
					}
			});
	});
});
