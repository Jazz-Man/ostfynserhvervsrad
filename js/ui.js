$(".topCarousel").owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      nav: true,
      stagePadding: 0,
      smartSpeed: 750,
      autoplay: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      autoplayTimeout: 5000,
      navText: ["<span class='icon'>","<span class='icon'>"]
});

$(".eventCarousel").owlCarousel({
      loop: true,
      nav: false,
      smartSpeed: 350,
      autoplay: true,
      slideSpeed: 500,
      paginationSpeed: 400,
      autoplayTimeout: 2500,
      responsive: {
        320: {
          center: true,
          margin: 15,
          items: 1,
          stagePadding: 30
        },
        768: {
          center: false,
          margin: 20,
          items: 3,
          stagePadding: 0
        }
      }
      // navText: ["<span class='icon'>","<span class='icon'>"]
});

$(".newsCarousel").owlCarousel({
      loop: true,
      nav: false,
      smartSpeed: 350,
      autoplay: true,
      slideSpeed: 500,
      paginationSpeed: 400,
      autoplayTimeout: 2500,
      responsive: {
        320: {
          margin: 15,
          items: 1,
          stagePadding: 30
        },
        768: {
          center: true,
          items: 2,
          margin: 30,
          stagePadding: 0,
        }
      }
});


$(".reviewsCarousel").owlCarousel({
      loop: true,
      nav: false,
      smartSpeed: 350,
      autoplay: true,
      slideSpeed: 500,
      paginationSpeed: 400,
      autoplayTimeout: 2500,
      responsive: {
        320: {
          center: true,
          margin: 15,
          items: 1,
          stagePadding: 30
        },
        768: {
          center: true,
          margin: 15,
          items: 1,
          stagePadding: 150
        },
        1024: {
          center: false,      
          margin: 30,
          items: 3,
          stagePadding: 0
        }
    }
});

$(".memberCarousel").owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    smartSpeed: 750,
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    autoplayTimeout: 5000,
    navText: ["<span class='icon'>","<span class='icon'>"],
    responsive: {
        320: {
          center: true,
          margin: 15,
          items: 1,
          stagePadding: 30
        },
        768: {
          center: false,
          margin: 20,
          items: 3,
          stagePadding: 0
        },
        1025: {
          center: false,
          margin: 30,
          items: 4,
          stagePadding: 0
        }
      }
});


$(document).ready(function () {
    topBannerParallax.init();
});
topBannerParallax = {
    banner: "",
    bannerHeight: 0,
    init: function () {
        this.banner = $("#bunnerHolder");
        this.bannerHeight = this.banner.outerHeight();
        $(window).on("scroll", function () {
            topBannerParallax.parallax();
        });
    },
    parallax: function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop <= this.bannerHeight) {
            var bmarg = scrollTop / 2 * -1;
            this.banner.css("margin-top", bmarg);
        }
    }
}

// function for scroll menu
var Width = $(window).outerWidth() + 17;
// var menuTop = $('.header');

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight() + 300;

var navbarHeightMobile = $('.header').outerHeight() + 10;

$(function(){
    $(window).scroll(function(){
        didScroll = true;
        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        // show / hide header
        function hasScrolled() {
            var st = $(this).scrollTop();

            if(Width >= 768) {
              if(Math.abs(lastScrollTop - st) <= delta)
                  return;

              if (st > lastScrollTop && st > navbarHeight){

                  $('.header').removeClass('navDown').addClass('navUp');
              } else {

                  if(st + $(window).height() < $(document).height()) {
                      $('.header').removeClass('navUp').addClass('navDown');
                  }
              }  
            }

            if(Width <= 767) {
              if(Math.abs(lastScrollTop - st) <= delta)
                  return;

              if (st > lastScrollTop && st > navbarHeightMobile){

                  $('.header').removeClass('navDown').addClass('navUp');
              } else {

                  if(st + $(window).height() < $(document).height()) {
                      $('.header').removeClass('navUp').addClass('navDown');
                  }
              }  
            }
            

            lastScrollTop = st;
        }

        // function makes header smaller
        if(Width >= 768) {
            if($(this).scrollTop() > 275){
                $('.header').addClass('menuBg');
            } else {
                $('.header').removeClass('menuBg');
            }
        } else {
            if($(this).scrollTop() > 275) {
                $('.header').addClass('menuBg');
            } else {
                $('.header').removeClass('menuBg');
            }
        }

        // mobile
        if(Width <= 767) {
            if($(this).scrollTop() > 100){
                $('.header').addClass('menuBg');
                $('.menu-wrap').addClass('menuScroll');
            } else {
                $('.header').removeClass('menuBg');
                $('.menu-wrap').removeClass('menuScroll');
            }
        } else {
            if($(this).scrollTop() > 100) {
                $('.header').addClass('menuBg');
                $('.menu-wrap').addClass('menuScroll');
            } else {
                $('.header').removeClass('menuBg');
                $('.menu-wrap').removeClass('menuScroll');
            }
        }
    });
});

// scroll blocks
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('inView');
    } else {
      $element.removeClass('inView');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

// function calc height 
if ($(window).width() >= 768) {
    $(document).load(function () {
        var p = $(".oterHeightParrent").outerHeight();
        var q = $(".oterHeightParrentQuots").outerHeight();
        var m = $(".oterHeightParrentMicro").outerHeight();
        var l = $(".oterHeightParrentCLogo").outerHeight();
                
        $(".resizeHeight").outerHeight(p);
        $(".resizeHeightQuots").outerHeight(q);
        $(".resizeHeightMicro").outerHeight(m);
        $(".resizeHeightC").outerHeight(l);
        
    });
    $(document).ready(function () {
        var p = $(".oterHeightParrent").outerHeight();
        var q = $(".oterHeightParrentQuots").outerHeight();
        var m = $(".oterHeightParrentMicro").outerHeight();
        var l = $(".oterHeightParrentCLogo").outerHeight();

        $(".resizeHeight").outerHeight(p);
        $(".resizeHeightQuots").outerHeight(q);
        $(".resizeHeightMicro").outerHeight(m);
        $(".resizeHeightC").outerHeight(l);
    });
};
$(window).resize(function () {
    if ($(window).width() >= 768) {
        var p = $(".oterHeightParrent").outerHeight();
        var q = $(".oterHeightParrentQuots").outerHeight();
        var m = $(".oterHeightParrentMicro").outerHeight();
        var l = $(".oterHeightParrentCLogo").outerHeight();

        $(".resizeHeight").outerHeight(p);
        $(".resizeHeightQuots").outerHeight(q);
        $(".resizeHeightMicro").outerHeight(m);
        $(".resizeHeightC").outerHeight(l);
    };
});

// function find max height


// Masonry grid about us
var container = document.querySelector('#grid');
  var msnry;
    msnry = new Masonry(container, {
      columnWidth: ".grid-sizer",
      gutter: ".gutter-sizer",
      itemSelector: '.gridItem'
    });

// Masonry grid events
var containerEvent = document.querySelector('#gridEvent');
  var msnryEvents;
    msnryEvents = new Masonry(containerEvent, {
      columnWidth: ".grid-sizer",
      gutter: ".gutter-sizer",
      itemSelector: '.gridItem'
    });

// Masonry grid past event
var containerEventPast = document.querySelector('#gridEventPast');
  var msnryPastEvents;
    msnryPastEvents = new Masonry(containerEventPast, {
      columnWidth: ".grid-sizer",
      gutter: ".gutter-sizer",
      itemSelector: '.gridItem'
    });

// Masonry frid aside right
var containerAs = document.querySelector('#asideRight');
  var msnryAsRight;
    msnryAsRight = new Masonry(containerAs, {
      columnWidth: ".grid-sizer",
      gutter: ".gutter-sizer",
      itemSelector: '.gridItem'
    });

// show image after choose
function chooseAvatar(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#avatar').attr('src', e.target.result).addClass('imageShow');
            $('#icon').addClass('bgwhite');
        };

        reader.readAsDataURL(input.files[0]);
    }
}