(function ($) {
    "use strict";
    /* --------------------------------------------
     Page height classes creator 
     --------------------------------------------- */

    function page_height_classes_creator() {
        var minheight = $(window).height();
        var headerhight = $('.navbar').outerHeight(true);
        var hightoutput = minheight - headerhight;
        var half_height = minheight / 2;
        var thirdhaflhight = (hightoutput / 4) * 3.4;
        var thirdhaflcutedhight = (hightoutput / 4) * 0.56;
        var $min_half_height = $(".min_half_height");
        var $thirdhalf_height = $(".thirdhalf_height, .thirdhalf_height .item, .thirdhalf_height  .owl-carousel-item");
        var $halfheight_screen = $(".halfheight_screen, .halfheight_screen  .item, .halfheight_screen  .owl-carousel-item , .halfheight_screen  .horizontal-item");
        var $full_height = $(".full-screen .owl-carousel-item, .full-screen .bg-image, .full_height");
        var $full_height_minus_header = $(".full-screen-minus-header .owl-carousel-item, .full-screen-minus-header .bg-image");
        var $full_height_minus_header_border = $(".full-screen-minus-header-border .owl-carousel-item, .full-screen-minus-header-border .horizontal-item, .full-screen-minus-header-border .item");
        var $zero_one_carousel_img = $(".zero-one-carousel .owl-carousel-item-bg-image, .zero-one-carousel .owl-carousel-item-bg-image img");

        $min_half_height.css({
            'min-height': minheight / 2,
        });

        $thirdhalf_height.css({
            'height': thirdhaflhight
        });

        $halfheight_screen.css({
            'height': half_height
        });

        $full_height.css({
            'min-height': minheight,
            'height': minheight
        });

        $full_height_minus_header.css({
            'min-height': hightoutput,
            'height': hightoutput
        });

        $full_height_minus_header_border.css({
            'min-height': hightoutput - 42,
            'height': hightoutput - 42
        });

        if ($(window).height() < 800) {
            $zero_one_carousel_img.css({
                'min-height': hightoutput - 100,
                'height': hightoutput - 100
            });
        } else if ($(window).width() == 1024 && $(window).height() == 1366) {
            $zero_one_carousel_img.css({
                'min-height': hightoutput / 2 - 100,
                'height': hightoutput / 2 - 100
            });
            if ($('.zero-one-carousel').hasClass("full-screen-minus-header") || $('.zero-one-carousel').hasClass("full-screen") || $('.zero-one-carousel').hasClass("full-screen-minus-header-border")) {
                $full_height_minus_header.css({
                    'min-height': hightoutput / 2,
                    'height': hightoutput / 2
                });
            }
        } else {
            $zero_one_carousel_img.css({
                'min-height': hightoutput - 200,
                'height': hightoutput - 200
            });
        }

    }

    /* --------------------------------------------
     Nav Menu
     --------------------------------------------- */
    function et_nav_menu() {
        // Make multi level bootstrap menu

        $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
            var $el = $(this);
            var $parent = $(this).offsetParent(".dropdown-menu");
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            if (!$el.offsetParent(".dropdown-menu").hasClass('mega_menu')) {

                var $subMenu = $(this).next(".dropdown-menu");
                $subMenu.toggleClass('show');
                $(this).parent("li").toggleClass('show');
                $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                    $('.dropdown-menu .show').removeClass("show");
                });
                if (!$parent.parent().hasClass('navbar-nav')) {
                    if (!$el.parent().hasClass('mega_menu_holder') && !$("nav").hasClass("sidebar-nav")) {
                        $el.next().css({
                            "top": $el[0].offsetTop,
                            "left": $parent.outerWidth() - 4
                        });

                    }
                }
            }
            return false;
        });

        // Add current class to active menu's item 
        var links = $('.navbar a');
        $.each(links, function (key, va) {
            if (va.href === document.URL) {
                $(this).parents('li').addClass('current');
            }
        });
        // toggle classes on click menu btn
        jQuery(".hamburger-menu-btn").on('click', function (e) {
            //For hamburger-menu-btn
            jQuery(this).toggleClass("is-active");
            //For fullscreen-menu-holder
            var elm_fullscreen_menu_holder = $('.fullscreen-menu-holder');
            jQuery(elm_fullscreen_menu_holder).toggleClass("is-active");
            //For sidebar-nav
            var elm_sidebar_nav = $('.sidebar-nav');
            jQuery(elm_sidebar_nav).toggleClass("is-active");
        });

        // Sidebar Menu
        $.sidebarMenu = function (menu) {
            var animationSpeed = 300,
                subMenuSelector = '.sidebar-submenu';

            $(menu).on('click', 'li a', function (e) {
                var $this = $(this);
                var checkElement = $this.next();

                if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
                    checkElement.slideUp(animationSpeed, function () {
                        checkElement.removeClass('menu-open');
                    });
                    checkElement.parent("li").removeClass("active");
                }

                //If the menu is not visible
                else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
                    //Get the parent menu
                    var parent = $this.parents('ul').first();
                    //Close all open menus within the parent
                    var ul = parent.find('ul:visible').slideUp(animationSpeed);
                    //Remove the menu-open class from the parent
                    ul.removeClass('menu-open');
                    //Get the parent li
                    var parent_li = $this.parent("li");

                    //Open the target menu and add the menu-open class
                    checkElement.slideDown(animationSpeed, function () {
                        //Add the class active to the parent li
                        checkElement.addClass('menu-open');
                        parent.find('li.active').removeClass('active');
                        parent_li.addClass('active');
                    });
                }
                //if this isn't a link, prevent the page from being redirected
                if (checkElement.is(subMenuSelector)) {
                    e.preventDefault();
                }
            });
        }
        $.sidebarMenu($('.sidebar-menu'))
        // side-canvas-bar
        jQuery(".side-canvas-bar-btn").on('click', function (e) {
            jQuery(".side-canvas-bar").toggleClass("side-canvas-bar-open");
        });

        //  search bar
        $(function () {
            var $searchlink = $('#mini-searchtoggl i');
            var $searchbar = $('#mini-search');

            $searchlink.on('click', function (e) {
                e.preventDefault();

                if (!$searchbar.is(":visible")) {
                    // if invisible we switch the icon to appear collapsable
                    $searchlink.removeClass('fa-search').addClass('fa-search-minus');
                } else {
                    // if visible we switch the icon to appear as a toggle
                    $searchlink.removeClass('fa-search-minus').addClass('fa-search');
                }

                $searchbar.slideToggle(300, function () {
                    // callback after search bar animation
                });
            });

            $('#searchform').submit(function (e) {
                e.preventDefault(); // stop form submission
            });
        });
    }
    /* --------------------------------------------
     Sticky header
     --------------------------------------------- */

    function sticky_header() {
        var $navbar = $("nav.navbar");
        var $body = $('body');
        var $fixed_top = $('.fixed-top');
        var $center_header = $('.center_header');
        var $top_header = $('.top_header');
        if (!$navbar.hasClass("sideheader")) {
            if ($navbar.hasClass("fixed-top")) {
                var stickyNavTop = $fixed_top.offset().top;
                if ($navbar.hasClass($center_header)) {

                } else if ($navbar.hasClass($center_header)) {
                    var menu = document.querySelector($fixed_top);
                    var menuPosition = menu.getBoundingClientRect();
                    var placeholder = document.createElement('div');
                    placeholder.style.width = menuPosition.width + 'px';
                    placeholder.style.height = menuPosition.height + 'px';
                    menu.parentNode.insertBefore(placeholder, menu);

                } else {
                    var menu = document.querySelector($fixed_top);
                    var menuPosition = menu.getBoundingClientRect();
                    var bodymarginforheader = menuPosition.height + 'px';
                    $body.css("margin-top", bodymarginforheader);
                }

                var stickyNav = function () {
                    var scrollTop = $(window).scrollTop();

                    if ($navbar.hasClass($center_header)) {

                        var fromtop = 0;
                        if ($top_header.length) {
                            var fromtop = $top_header.outerHeight();
                        }
                        $fixed_top.css({
                            top: fromtop + 'px'
                        });

                        if (scrollTop > stickyNavTop + 700) {

                            $fixed_top.css({
                                top: '0px'
                            });
                            $fixed_top.addClass('sticky_header_runing');
                        } else {
                            $fixed_top.removeClass('sticky_header_runing');

                        }
                    } else {

                        if (scrollTop > stickyNavTop) {
                            $fixed_top.addClass('sticky_header_runing');
                        } else {
                            $fixed_top.removeClass('sticky_header_runing');
                        }
                    }

                };

                stickyNav();
                $(window).scroll(function () {
                    stickyNav();
                });
            }
        }
    }

    /* --------------------------------------------
     owl carousel calling function
     --------------------------------------------- */
    function owl_main_carousel() {
        if ($('#default-carousel').length) {
            var owl = $("#default-carousel");
            owl.owlCarousel({
                nav: false,
                dots: true,
                items: 1,
                autoplay: false,
                navText: ['<i class="fas fa-angle-left" aria-hidden="true"></i>', '<i class="fas fa-angle-right" aria-hidden="true"></i>'],
                afterAction: function (el) {
                    //remove class active
                    this.$owlItems.removeClass('active')
                    //add class active
                    this.$owlItems.eq(this.currentItem + 1).addClass('active')
                }
            });
        }
    }

    function owl_default_carousel_2() {
        if ($('#default-carousel2').length) {
            var owl = $("#default-carousel2");
            owl.owlCarousel({
                nav: false,
                dots: true,
                items: 1,
                autoplay: false,
                navText: ['<i class="fas fa-angle-left" aria-hidden="true"></i>', '<i class="fas fa-angle-right" aria-hidden="true"></i>'],
                afterAction: function (el) {
                    //remove class active
                    this.$owlItems.removeClass('active')
                    //add class active
                    this.$owlItems.eq(this.currentItem + 1).addClass('active')
                }
            });
        }
    }

    function owl_zero_one_carousel() {
        if ($('#zero-one-carousel').length) {
            var owl = $("#zero-one-carousel");
            owl.owlCarousel({
                items: 1,
                dots: true,
                dotsEach: true,
                autoplay: false,
                autoHeight: true,
                URLhashListener: true,
                startPosition: 'URLHash',
                navText: ['<i class="fas fa-angle-left" aria-hidden="true"></i>', '<i class="fas fa-angle-right" aria-hidden="true"></i>'],
                afterAction: function (el) {
                    //remove class active
                    this.$owlItems.removeClass('active')
                    //add class active
                    this.$owlItems.eq(this.currentItem + 1).addClass('active')
                }
            });

            $('.owl-carousel-hash-nav a').on('click', function (e) {
                var $this = $(this);
                $('.owl-carousel-hash-nav a').removeClass("active");
                $this.addClass("active");
                return false;
            });
        }
    }

    function owl_blog_carousel() {
        if ($('#blog_carousel').length) {
            var owl = $('#blog_carousel');
            if (owl.length) {
                owl.owlCarousel({
                    nav: true,
                    dots: false,
                    items: 3,
                    loop: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 2
                        },
                        1000: {
                            items: 2
                        },
                        1200: {
                            items: 3
                        },
                    },
                    navText: ['<i class="fas fa-angle-left" aria-hidden="true"></i>', '<i class="fas fa-angle-right" aria-hidden="true"></i>'],

                });
            }
        }
    }

    function owl_multi_work_carousel() {
        if ($('#multi-work-carousel').length) {
            var owl = $('#multi-work-carousel');
            if (owl.length) {
                owl.owlCarousel({
                    nav: true,
                    dots: false,
                    loop: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        1000: {
                            items: 2,
                            margin: 30,
                        },
                        1200: {
                            items: 3,
                            margin: 30,
                        },
                    },
                    navText: ['<i class="fas fa-angle-left" aria-hidden="true"></i>', '<i class="fas fa-angle-right" aria-hidden="true"></i>'],
                });
            }
        }
    }

    function owl_home_40_carousel() {
        if ($('#home-40-owl-carousel').length) {
            var owl = $('#home-40-owl-carousel');
            if (owl.length) {
                owl.owlCarousel({
                    nav: false,
                    dots: true,
                    loop: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        1000: {
                            items: 2,
                            margin: 30,
                        },
                        1200: {
                            items: 4,
                            margin: 30,
                        },
                    },
                    navText: ['<i class="fas fa-angle-left" aria-hidden="true"></i>', '<i class="fas fa-angle-right" aria-hidden="true"></i>'],
                });
            }
        }
    }

    function owl_home_30_carousel() {
        if ($('#home-30-owl-carousel').length) {
            var owl = $('#home-30-owl-carousel');
            if (owl.length) {
                owl.owlCarousel({
                    nav: true,
                    dots: false,
                    items: 1,
                    loop: true,

                    navText: ['<i class="fas fa-angle-left" aria-hidden="true"></i>', '<i class="fas fa-angle-right" aria-hidden="true"></i>'],
                });
            }
        }
    }

    function owl_home_31_carousel() {
        if ($('#home-31-owl-carousel').length) {
            var owl = $('#home-31-owl-carousel');
            if (owl.length) {
                owl.owlCarousel({
                    nav: true,
                    dots: false,
                    items: 1.2,
                    center: true,
                    loop: true,
                    responsive: {
                        0: {
                            margin: 10,
                        },
                        1200: {
                            margin: 30,
                        },
                    },
                    navText: ['<i class="fas fa-angle-left" aria-hidden="true"></i>', '<i class="fas fa-angle-right" aria-hidden="true"></i>'],
                });
            }
        }
    }

    function owl_project_carousel() {
        var owl = $("#project_carousel");
        if (owl.length) {
            owl.owlCarousel({
                margin: 30,
                autoplay: false,
                loop: true,
                nav: false,
                dots: true,
                smartSpeed: 1000,
                dotsSpeed: 1000,
                dragEndSpeed: 800,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    },
                }

            });

        }
    }

    function owl_loop_carousel() {
        var owl = $('#loop_carousel');
        if (owl.length) {
            owl.owlCarousel({
                items: 5,
                center: true,
                autoplay: true,
                autoWidth: true,
                loop: true,
                itemsDesktop: [1000, 5],
                itemsDesktopSmall: [900, 3],
                itemsTablet: [600, 2],
                nav: false,
                dots: false,

            });

        }
    }

    function owl_testimonials_carousel() {
        var owl = $("#testimonials");
        if (owl.length) {
            owl.owlCarousel({
                autoplay: true,
                nav: false, // Show next and prev buttons
                smartSpeed: 1000,
                dotsSpeed: 1000,
                items: 1,
            });
        }
    }

    function owl_testimonials_box_carousel() {
        var owl = $("#testimonials_box");
        if (owl.length) {
            owl.owlCarousel({
                autoplay: true,
                dots: true,
                nav: false,
                loop: true,
                smartSpeed: 1000,
                dotsSpeed: 1000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0,
                    },
                    1000: {
                        items: 2,
                        margin: 30,
                    },
                    1200: {
                        items: 3,
                        margin: 30,
                    }
                }
            });
        }
    }

    function imgAsB_fix() {
        if (document.documentMode || /Edge/.test(navigator.userAgent)) {
            var $bg_image = $('.bg-image');
            $bg_image.each(function () {
                var $container = $(this),
                    imgUrl = $container.find('img').prop('src');
                if (imgUrl) {
                    var img_Height = $container.find('img').height();
                    console.log(img_Height);
                    $container
                        .css('backgroundImage', 'url(' + imgUrl + ')')
                        .addClass('compat-object-fit').css({
                            'min-height': img_Height,
                        }).children('img').hide();
                }
            });
        }
    }

    /* --------------------------------------------
       Isotope  calling function
    --------------------------------------------- */

    function Isotope_masonry_layout() {
        var $masonry_layout = $('.masonry_layout');
        if ($masonry_layout.length) {
            // init Isotope
            var $grid = $masonry_layout.isotope({
                percentPosition: true,
                hiddenStyle: {
                    opacity: 0,
                    transform: 'scale(0.001)'
                },
                visibleStyle: {
                    opacity: 1,
                    transform: 'scale(1)'
                },
                transitionDuration: '0.6s',
                masonry: {}
            });
            // Isotope filter
            var $items_filter = $('.items_filter');
            var $items_filter_span = $('.items_filter li span');
            $items_filter_span.on('click', function () {
                var $this = $(this);
                var filterValue = $this.attr('data-filter');
                $this.parent().removeClass('active');
                $this.parent().addClass('active');
                $grid.isotope({
                    filter: filterValue
                });
            });

            // layout Isotope after each image loads
            $grid.imagesLoaded().progress(function () {
                $grid.isotope('layout');
            });
        }
    }

    /* --------------------------------------------
     Number Counter 
     --------------------------------------------- */

    function countToNumber() {
        var $timer = $('.timer');
        if ($timer.length) {
            $timer.countTo();
        }
    }

    /* --------------------------------------------
      Countdown
    --------------------------------------------- */
    function et_countdown() {
        var $getting_started = $('#getting-started');
        if ($getting_started.length) {
            $getting_started.countdown('2022/01/01', function (event) {
                var $this = $(this);
                $this.html(event.strftime('<span class="countdown_value"> %m <span class="countdown_lable"> Months  </span></span> <span class="countdown_value"> %d <span class="countdown_lable"> Days </span> </span> <span class="countdown_value"> %H <span class="countdown_lable"> Hours </span></span> <span class="countdown_value"> %M <span class="countdown_lable"> Minutes </span></span> <span class="countdown_value"> %S <span class="countdown_lable"> Seconds </span></span>'));
            });
        }
    }

    /* --------------------------------------------
      Magnific Popup
    --------------------------------------------- */
    function popup_gallery_int() {
        var $popup_gallery = $('.popup_gallery');
        if ($popup_gallery.length) {
            $popup_gallery.magnificPopup({
                delegate: 'img',
                type: 'image',
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                fixedContentPos: false,
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300, // don't foget to change the duration also in CSS
                },
                callbacks: {
                    elementParse: function (qw) {
                        qw.src = qw.el.attr('src');
                    }
                }
            });
        }
        // For video popup (PLAY VIDEO TRIGGER)
        var $video_play_trigger = $('.iframe_trigger, #iframe_trigger');
        if ($video_play_trigger.length) {
            $video_play_trigger.magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        };

    }


    /* --------------------------------------------
      Instagram feed
    --------------------------------------------- */
    function Instafeed_int() {
        var $instagramfeed = $('#instagramfeed');
        if ($instagramfeed.length) {
            var feed = new Instafeed({
                get: 'user',
                userId: '6860378171',
                accessToken: '6860378171.1677ed0.16fe436053ac494f833e5005ef348d83',
                target: 'instagramfeed',
                limit: 6,
                resolution: 'low_resolution',
                template: '<li class="col-4 mb-10px"><a href="{{link}}"><img src="{{image}}" /></a></li>'
            });
            feed.run();
        }
    }


    /* --------------------------------------------
      Twitter Feeds
    --------------------------------------------- */
    function twitterfeeds_int() {
        var $twitterfeed_id = $('#twitterfeed');
        if ($twitterfeed_id.length) {

            var config8 = {
                "profile": {
                    "screenName": 'SerialEnterpDev'
                },
                "dataOnly": true,
                "maxTweets": 2,
                "customCallback": populateTpl
            };

            twitterFetcher.fetch(config8);
        }
            function populateTpl(tweets) {
                var element = document.getElementById('twitterfeed');

                var html = '<ul class="list-unstyled tweets-simple-list">';
                for (var i = 0, lgth = tweets.length; i < lgth; i++) {
                    var tweetObject = tweets[i];
                    html += '<li class="media">' +
                        '<div class="mr-3"><i class="fab fa-twitter" aria-hidden="true"></i></div>' +
                        '<div class="tweet-content">' + tweetObject.tweet + '</div>' +
                        '</li>';
                }
                html += '</ul>';
                element.innerHTML = html;
            }
        

    }
    /* --------------------------------------------
      Element Animate effect
    --------------------------------------------- */

    function et_animate_item() {
        AOS.init({
            offset: 100,
            duration: 600,
            easing: 'linear',
            once: true,
        });
    }

    /* ---------------------------------------------
     Scripts initialization
     --------------------------------------------- */

    $(window).on('load', function () {
        "use strict"; // Start of use strict
        Isotope_masonry_layout();
    });

    $(document).ready(function () {
        "use strict"; // Start of use strict  

        owl_main_carousel();
        owl_default_carousel_2();
        owl_zero_one_carousel();
        owl_blog_carousel();
        owl_loop_carousel();
        owl_multi_work_carousel();
        owl_project_carousel();
        owl_home_30_carousel();
        owl_home_31_carousel();
        owl_home_40_carousel();
        owl_testimonials_carousel();
        owl_testimonials_box_carousel();
        imgAsB_fix();
        popup_gallery_int();
        countToNumber();
        et_countdown();
        et_nav_menu();
        et_animate_item();
        Instafeed_int();
        twitterfeeds_int();
        sticky_header();
    });

    /* ---------------------------------------------
     On resize calling function
     --------------------------------------------- */
    $(window).on('resize', function () {
        "use strict"; // Start of use strict
        page_height_classes_creator();

    }).trigger('resize');

})(jQuery)