(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    var s = $("#sticker");
    var pos = s.position();                    
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= pos.top) {
            s.addClass("stick");
        } else {
            s.removeClass("stick"); 
        }
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space