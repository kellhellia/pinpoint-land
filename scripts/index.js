$(document).ready(function(){
  $(".navbar").stick_in_parent();

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

  $('.slick').slick({
  	autoplay: true,
  	autoplaySpeed: 2000,
  	pauseOnHover: false
  });

  $('.slick-case').slick({
  	dots: true,
  	arrows:false,
  	autoplay: true,
  	autoplaySpeed: 20000,
  	pauseOnHover: false
  });

  $('.modal__btn').click(function() {
    ga('send', 'event', 'Form', 'Submit', 'Request a callback');
  });

  $('.login__button_blue').click(function () {
    ga('send', 'event', 'Form', 'Submit', 'Signup');
  });
});