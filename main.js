(function() {
    'use strict';
  
    // Set scrollbar with to CSS
    document.documentElement.style.setProperty('--scrollbarWidth', `${(window.innerWidth - document.body.clientWidth) / 2}px`);
  
    /* Mobile detect */
  var desktop_nav, height_line, init_YTPlayer, init_background_image, init_classic_menu, init_classic_menu_resize, init_count_number, init_lightbox, init_masonry, init_navigation_scroll, init_progress_bar, init_skrollr, init_wow, mobileTest, mobile_nav, init_typing;
  
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      mobileTest = true;
      $("html").addClass("mobile");
    } else {
      mobileTest = false;
      $("html").addClass("no-mobile");
    }
  
  
    /* Page Loader */
  
    $(window).load(function() {
      //$('.page-loader').delay(600).fadeOut('slow');
      $('.page-loader').fadeOut('slow');
        init_typing();
    });
  
  
    /* Adding Background Image */
  
    init_background_image = function() {
      var pageSection;
      pageSection = $(".bg-img, .parallax");
      pageSection.each(function() {
        if ($(this).attr("data-background")) {
          $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
      });
    };
  
    init_background_image();
  
  
    /* skrollr */
  
    init_skrollr = function() {
      if (($(window).width() >= 1024) && (mobileTest === false)) {
        skrollr.init({
          forceHeight: false,
          smoothScrolling: false
        });
      }
    };
  
    $(window).load(function() {
      init_skrollr();
    });
  
    /* Progress Bar */
  
    init_progress_bar = function() {
      if (($(window).width() >= 1024) && (mobileTest === false)) {
        $(".progress-bar").appear(function() {
          var addPerstange, count, progressContainer, progressPerstange, step;
          progressContainer = $(this);
          progressPerstange = progressContainer.attr("data-progress");
          step = 5;
          count = 30;
          addPerstange = function() {
            progressContainer.css("width", count + "%");
            if (count < progressPerstange) {
              count += step;
              setTimeout(addPerstange, 40);
            }
          };
          addPerstange();
        });
      } else {
        $(".progress-bar").each(function() {
          var progressContainer, progressPerstange;
          progressContainer = $(this);
          progressPerstange = progressContainer.attr("data-progress");
          progressContainer.css("width", progressPerstange + "%");
        });
      }
    };
  
    init_progress_bar();
  
  
    /* Navigation Panel */
  
    height_line = function(height_object, height_donor) {
      height_object.height(height_donor.height());
      height_object.css({
        'line-height': height_donor.height() + 'px'
      });
    };
  
    mobile_nav = $('.navbar-mobile');
  
    desktop_nav = $('.navbar-desktop');
  
    init_classic_menu_resize = function() {
      $('.mobile-on .navbar-desktop > ul').css('max-height', $(window).height() - $('.main-nav').height() - 20 + 'px');
      if ($(window).width() <= 1024) {
        $('.main-nav').addClass('mobile-on');
      } else if ($(window).width() > 1024) {
        $('.main-nav').removeClass('mobile-on');
        desktop_nav.show();
      }
    };
  
    init_classic_menu = function() {
      var check_scroll, menuHasSub, menuThisLi;
      check_scroll = function() {
        if ($(window).scrollTop() > 10) {
          $('.js-transparent').removeClass('transparent');
          $('.main-nav, .nav-logo-wrap .logo, .navbar-mobile').addClass('small-height');
        } else {
          $('.js-transparent').addClass('transparent');
          $('.main-nav, .nav-logo-wrap .logo, .navbar-mobile').removeClass('small-height');
        }
      };
      $('.js-stick').sticky({
        topSpacing: 0
      });
      height_line($('.inner-nav > ul > li > a'), $('.main-nav'));
      height_line(mobile_nav, $('.main-nav'));
      mobile_nav.css({
        'width': $('.main-nav').height() + 'px'
      });
      if ($('.main-nav').hasClass('transparent')) {
        $('.main-nav').addClass('js-transparent');
      }
      check_scroll();
      $(window).scroll(function() {
        check_scroll();
      });
          // Button nav
          let $innerNav = document.querySelector('.inner-nav');
          mobile_nav.on('click', function() {
                  $innerNav.classList.add('show');
                  disableScroll();
          });
          $('.close-nav, .inner-nav a').on('click', function() {
                  $innerNav.classList.remove('show');
                  enableScroll();
          });
      desktop_nav.find('a:not(.menu-has-sub)').on('click', function() {
        if (mobile_nav.hasClass('active')) {
          desktop_nav.slideUp('slow').removeClass('js-opened');
          mobile_nav.removeClass('active');
        }
      });
      menuHasSub = $('.menu-has-sub');
      menuThisLi = void 0;
      $('.mobile-on .menu-has-sub').find('.fa:first').removeClass('fa-angle-right').addClass('fa-angle-down');
      menuHasSub.on('click', function() {
        if ($('.main-nav').hasClass('mobile-on')) {
          menuThisLi = $(this).parent('li:first');
          if (menuThisLi.hasClass('js-opened')) {
            menuThisLi.find('.menu-sub:first').slideUp(function() {
              menuThisLi.removeClass('js-opened');
              menuThisLi.find('.menu-has-sub').find('.fa:first').removeClass('fa-angle-up').addClass('fa-angle-down');
            });
          } else {
            $(this).find('.fa:first').removeClass('fa-angle-down').addClass('fa-angle-up');
            menuThisLi.addClass('js-opened');
            menuThisLi.find('.menu-sub:first').slideDown();
          }
          return false;
        } else {
  
        }
      });
      menuThisLi = menuHasSub.parent('li');
      menuThisLi.hover((function() {
        if (!$('.main-nav').hasClass('mobile-on')) {
          $(this).find('.menu-sub:first').stop(true, true).fadeIn('fast');
        }
      }), function() {
        if (!$('.main-nav').hasClass('mobile-on')) {
          $(this).find('.menu-sub:first').stop(true, true).delay(100).fadeOut('fast');
        }
      });
    };
  
    init_classic_menu();
  
    init_classic_menu_resize();
  
    $(window).resize(function() {
      init_classic_menu_resize();
    });
  
  
    /* Navigation On SCroll */
  
    init_navigation_scroll = function() {
  
      /* Smooth scroll */
      var menuLinks, sections;
      $('.scroll > li > a, a.scroll').smoothScroll({
        speed: 1200
      });
      sections = $('body section');
      menuLinks = $('.scroll-nav li a');
      $(window).scroll(function() {
        sections.filter(":in-viewport:first").each(function() {
          var activeLink, activeSection;
          activeSection = $(this);
          activeLink = $('.scroll-nav li a[href$="#' + activeSection.attr("id") + '"]');
          menuLinks.removeClass('active');
          activeLink.addClass('active');
        });
      });
    };
  
    init_navigation_scroll();
  
  
    /* Masonry Plagin */
  
    init_masonry = function() {
      var blogContainer;
      blogContainer = $('.blog-masonry');
      blogContainer.imagesLoaded(function() {
        blogContainer.isotope({
          itemSelector: '.post-masonry'
        });
      });
    };
  
    init_masonry();
  
    /* Popup, Video, Lightbox, Ajax Portfolio */
  
    init_lightbox = function() {
      var magnific_ajax;
      magnific_ajax = function() {
        var hash, magnificPopup;
        magnificPopup = $.magnificPopup.instance;
        hash = document.location.hash.split('=');
        if (hash[0] === '#youtube') {
          $.magnificPopup.open({
            items: {
              src: hash[1]
            },
            mainClass: 'mfp-move-horizontal',
            removalDelay: 1000,
            type: 'ajax',
            tLoading: '',
            showCloseBtn: false,
            callbacks: {
              open: function() {
                var src_url;
                src_url = $.magnificPopup.instance.currItem.src;
                history.pushState({}, '', '#youtube=' + src_url);
              },
              close: function() {
                history.pushState({}, '', document.location.pathname);
              },
              ajaxContentAdded: function() {
                $('#project').addClass('mfp-opacity');
                $('#bnt-close').on('click', function() {
                  $.magnificPopup.close();
                  return false;
                });
                $(".work-full-slider").owlCarousel({
                  slideSpeed: 350,
                  singleItem: true,
                  autoHeight: true,
                  navigation: true,
                  navigationText: ["<span class='angle'></span>", "<span class='angle'></span>"]
                });
              }
            }
          });
        }
      };
      magnific_ajax();
      $(window).on('hashchange', function() {
        magnific_ajax();
      });
      $('.work-gallery').magnificPopup({
        tLoading: '',
        gallery: {
          enabled: true
        },
        mainClass: "mfp-fade"
      });
      $('.magnific, .lightbox').magnificPopup({
        tLoading: ''
      });
      $('.video, .post-thumbnail').fitVids();
    };
  
    init_lightbox();
  
  
    /* Background YouTube Player */
  
    init_YTPlayer = function() {
      var player;
      player = $('.player');
      if (player.length && $(window).width() >= 1024 && mobileTest === false) {
        $(function() {
          player.YTPlayer();
        });
      }
    };
  
    init_YTPlayer();
  
  
    /* Count Numbers */
  
    init_count_number = function() {
      if (($(window).width() >= 1024) && (mobileTest === false)) {
        $('.focus-number').appear(function() {
          var count;
          count = $(this);
          count.countTo({
            from: 0,
            to: count.html(),
            speed: 1300,
            refreshInterval: 60
          });
        });
      }
    };
  
    init_count_number();
  
  
    /* WOW Animation */
  
    init_wow = function() {
      var wow;
      wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
      });
      if ($('body').hasClass('appear-animate')) {
        wow.init();
      }
    };
  
    init_wow();
  
    /* typing plugin */
    init_typing = function() {
      $('#typing').typed({
          strings: ['Las 7 leyes del caos',  ' Flores Biangelis, Oliver Fernández, Duarte Victor...', ' <span class="higl">Micro</span>Exposición '],
          typeSpeed: 5,
          startDelay: 500,
          backDelay: 1500
      });
    }
  
  
    // Auto hide navbar
    var nav = document.querySelector('.main-nav');
    var headroom  = new Headroom(nav, {
      classes : {
            // when element is initialised
            initial : "animated",
            // when scrolling up
            pinned : "slideInDown",
            // when scrolling down
            unpinned : "slideOutUp",
            // when above offset
            top : "",
            // when below offset
            notTop : "",
            // when at bottom of scoll area
            bottom : "",
            // when not at bottom of scroll area
            notBottom : ""
        }
    });
    headroom.init(); 
      // Ready
      window.onload = function() {
          let $innerNav = document.querySelector('.inner-nav');
          $innerNav.style.display = 'flex';
      }
  
      // Tools
          var keys = {37: 1, 38: 1, 39: 1, 40: 1};
  
          function preventDefault(e) {
              e = e || window.event;
              if (e.preventDefault)
                      e.preventDefault();
              e.returnValue = false;  
          }
  
          function preventDefaultForScrollKeys(e) {
                  if (keys[e.keyCode]) {
                          preventDefault(e);
                          return false;
                  }
          }
  
          function disableScroll() {
              if (window.addEventListener) // older FF
                      window.addEventListener('DOMMouseScroll', preventDefault, false);
              window.onwheel = preventDefault; // modern standard
              window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
              window.ontouchmove  = preventDefault; // mobile
              document.onkeydown  = preventDefaultForScrollKeys;
          }
  
          function enableScroll() {
                  if (window.removeEventListener)
                          window.removeEventListener('DOMMouseScroll', preventDefault, false);
                  window.onmousewheel = document.onmousewheel = null; 
                  window.onwheel = null; 
                  window.ontouchmove = null;  
                  document.onkeydown = null;  
          }
  
  
  }).call(this);
  