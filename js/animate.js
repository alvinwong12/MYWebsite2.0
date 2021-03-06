$(document).ready(function(){
    $('body').scrollspy({target: ".navbar", offset: 50});   
    $(".navbar-nav .nav-item .nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        } else{
            // go top
            $('html, body').animate({
            scrollTop: 0
            }, 800, function(){
            window.location.hash = hash;
            });
        }
    });
    $(window).scroll(function(){
		if ($(window).scrollTop() > 56){
			$("#main-navbar").css("cssText", "background: white !important;");
		}
		if ($(window).scrollTop() <= 56){
			$("#main-navbar").css("cssText", "background: transparent !important;");
		}
	});
});