var globalFunc = {
  init: function () {
    globalFunc.resize();
  },

  resize: function () {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    // STICKY FOOTER
    var headerHeight = $('header').outerHeight();
    var footerHeight = $('footer').outerHeight();
    var footerTop = (footerHeight) * -1;
    $('footer').css({ marginTop: footerTop });
    $('#main-wrapper').css({ paddingBottom: footerHeight });
  },

  touch: function () {
    if (Modernizr.touch) {
      $('html').addClass('bp-touch');
    }
  },

  accordion: function(){
    if($(window).width() < 768){
      
      $('.tabs__container').first().addClass('open');
      $('.tabs__container').first().find('.tabs__holder').css('display','block');

      $(document).on('click', '.tabs__container', function(){
        event.preventDefault();
        var _this = $(this);
        if(_this.hasClass('open')) {
          _this.stop().removeClass('open');
          _this.find('.tabs__holder').stop().slideUp(200);
        } else {
          $('.tabs__container').stop().removeClass('open');
          _this.stop().addClass('open');
          $('.tabs__holder').stop().slideUp(200);
          _this.find('.tabs__holder').stop().slideDown(200);
        }
      });
    } else {
      $('.tabs__holder').show();
    }

  }
};

$(window).resize(function () {
  globalFunc.init();
  // globalFunc.accordion();
});

$(document).ready(function () {
  globalFunc.touch();
  globalFunc.init();
  
});

$(window).on('load', function () {
  globalFunc.init();
  // globalFunc.accordion();
});

// preloader once done
Pace.on('done', function () {
  // totally hide the preloader especially for IE
  setTimeout(function () {
    $('.pace-inactive').hide();
  }, 500);
});

