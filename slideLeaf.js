(function ( $ ) {
  $.fn.slideLeaf = function(options){
    $theList = this.find('ul');
    if($theList.filter(function () {return $(this).find('li').find('img').length > 0;}).children().length > 0){
      
      $theList.wrap('<div id="swipe" />');
      $('#swipe').wrap('<div id="slideshow"/>');
      
      $('#slideshow').append('<div id="nav"/>');
      $('#nav').append('<div id="prev" class="gallery-nav"/>');
      $('#nav').append('<div id="next" class="gallery-nav"/>');

      window.mySwipe = Swipe($('#swipe')[0], {});
      $('#prev').click(function () {
        window.mySwipe.prev();
      });
      $('#next').click(function () {
        window.mySwipe.next();
      });
    }
  };
}( jQuery ));