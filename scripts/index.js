$(document).ready(function(){
  
  $(".login").stick_in_parent();

  $(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

  $('.slick').slick({
  	autoplay: true,
  	autoplaySpeed: 2000,
  	pauseOnHover: false
  });

  $('.slick-case').slick({
  	dots: true,
  	arrows:false,
  	autoplay: true,
  	autoplaySpeed: 10000,
  	pauseOnHover: false
  });


});