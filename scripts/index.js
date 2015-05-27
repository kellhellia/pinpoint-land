$(document).ready(function(){
  $('.slick').slick({
  	autoplay: true,
  	autoplaySpeed: 2000,
  	pauseOnHover: false
  });
  $('.slick-case').slick({
  	dots: true,
  	arrows:false,
  	autoplay: true,
  	autoplaySpeed: 3000,
  	pauseOnHover: false
  });

  $('#myModal').on('shown.bs.modal', function () {
	  $('#myInput').focus()
	})
});