
     $(document).ready(function(){
    $(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.yuxari').fadeIn();
		} else {
			$('.yuxari').fadeOut();
		}
	});
	
	$('.yuxari').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});







  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    }
  });
      
});









