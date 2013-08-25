(function ( $ ) {
  $.fn.slideLeaf = function(options){

     var settings = $.extend({
        showPagination: true,
        continuous: true
    }, options );

    var change_selected_item = function (index) {
      if(settings.continuous){
        if(!index){ 
          index = window.mySwipe.getPos() < window.mySwipe.getNumSlides() ? window.mySwipe.getPos() : window.mySwipe.getPos() - (window.mySwipe.getNumSlides());
        }
      }else{
        index = window.mySwipe.getPos();
        if(index == window.mySwipe.getNumSlides()-1){
          $('#next').hide();
          $('#prev').show();
        }else if(index == 0){
          $('#prev').hide();
          $('#next').show();
        }else
        {
          $('#prev').show();
          $('#next').show(); 
        }
      }
      $('.nav-page-thumb').removeClass('selected');
      $('#page'+index).addClass('selected');
    }

    $theList = this.find('ul');

    if($theList.filter(function () {return $(this).find('li').find('img').length > 0;}).children().length > 0){
      $theList.wrap('<div id="swipe" />');
      $('#swipe').wrap('<div id="slideshow"/>');

      $('#slideshow').append('<div id="nav"/>');
      $('#nav').append('<div id="prev" class="gallery-nav"/>');

      if(settings.showPagination){
        $('#nav').append('<div id="pages"/>');
        
        $.each($theList.find('li'), function  (k, v) {
            $('#pages').append('<div id="page'+k+'" data-index="'+k+'" class="nav-page-thumb">'+(k+1)+'</div>');
          }
        );

        $('.nav-page-thumb').click(
          function(){
            var index = $(this).data('index');
            window.mySwipe.slide(index, 300);
            change_selected_item(index);
          }
        );
      }

      $('#nav').append('<div id="next" class="gallery-nav"/>');

      window.mySwipe = Swipe($('#swipe')[0], {continuous: settings.continuous});
      change_selected_item();
      $('#prev').click(function () {
        window.mySwipe.prev();
        change_selected_item();
      });
      $('#next').click(function () {
        window.mySwipe.next();
        change_selected_item();
      });
    }


  };  
}( jQuery ));