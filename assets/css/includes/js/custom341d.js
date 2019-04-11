// JavaScript Document
jQuery(document).ready(function ($) {
    if ($('#slide-testi').length > 0) {
        // Slider Testimonial
        $("#slide-testi").owlCarousel({
            autoplay: true,
            loop: true,
            items: 1,
            autoplaySpeed: 2000
        });
    }
    var height_win = $(window).height();
    if (height_win < 800) {
        $('.shadown-bird').css('bottom', '15%');
    }
    //hide preloading
    setTimeout(function () {
        $('.mask-color').fadeOut('slow');
    }, 2000);
    // Point click slider
    $(".tooltip-item").click(function () {
        $('.content-left ul li').fadeOut(300);
        var that = $(this).attr('data-header-text');
        $("." + that).fadeIn(300);
    });
    // Menu style fixed
    $(window).scroll(function (e) {
        $el = $('#header-wrapper');
        if ($(window).scrollTop() > $el.height() && ( ( $(document).height() - $(window).height() ) > 3 * $el.height() )) {
            $el.addClass("sticky");
        } else {
            $el.removeClass("sticky");
        }
    });
    // Menu navigation right (responsive)
    var trigger = $('#hamburger'),
        isClosed = true;
    trigger.click(function () {
        burgerTime();
    });
    function burgerTime() {
        if (isClosed == true) {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    var menuRight = document.getElementById('cbp-spmenu-s2'),
        showRightPush = document.getElementById('hamburger'),
        body = document.body;
    if (!!showRightPush) {
        showRightPush.onclick = function () {
            classie.toggle(this, 'active');
            classie.toggle(body, 'cbp-spmenu-push-toleft');
            classie.toggle(menuRight, 'cbp-spmenu-open');
            disableOther('hamburger');
        };
    }
    // Animation SVG icon
    $('.line-svg').waypoint(function () {
        $(this).attr('class', 'line-svg start-paint');
    }, {offset: '85%', triggerOnce: true});
    $('.icon-feature-svg svg#icon-1 g line,' +
        '.icon-feature-svg svg#icon-1 polyline,' +
        '.icon-feature-svg svg#icon-2 path,' +
        '.icon-feature-svg svg#icon-2 line,' +
        '.icon-feature-svg svg#icon-2 path,' +
        '.icon-feature-svg svg#icon-2 line,' +
        '.icon-feature-svg svg#icon-3 circle,' +
        '.icon-feature-svg svg#icon-3 polyline,' +
        '.icon-feature-svg svg#icon-4 rect,' +
        '.icon-feature-svg svg#icon-4 polyline,' +
        '.icon-feature-svg svg#icon-4 line,' +
        '.icon-feature-svg svg#icon-5 polyline,' +
        '.icon-feature-svg svg#icon-5 line,' +
        '.icon-feature-svg svg#icon-6 polyline,' +
        '.icon-feature-svg svg#icon-6 line,' +
        '.icon-feature-svg svg#icon-6 path').waypoint(function () {
        $(this).attr('class', 'start-paint');
    }, {offset: '85%', triggerOnce: true});
    // Carousel 3D
    $("ul.carousel-3d").roundabout({
        responsive: true,
        minScale: 0.8,
        btnNext: ".next-slider-3d",
        btnPrev: ".prev-slider-3d",
    });
    /* =============== Isotope =============== */
    if ($('#list_extension').length > 0) {
        var $container = $('#list_extension').isotope({
            itemSelector: '.element-item',
            visibleStyle: {opacity: 1, transform: "scale(1)"},
            //layoutMode: 'fitRows',
        });
        // Filter items on link click
        $('#filters-item-extension').on('click', 'a', function () {
            var filterValue = $(this).attr('data-filter');
            $container.isotope({filter: filterValue});
            $('#filters-item-extension a').removeClass('active-filter');
            $(this).addClass('active-filter');
            return false;
        });
    }
    if ($("#showcase-sync-1").length > 0) {
        /* =============== Owl Carousel =============== */
        var sync1 = $("#showcase-sync-1");
        var sync2 = $("#showcase-sync-2");
        sync1.owlCarousel({
            autoPlay: 2500,
            singleItem: true,
            slideSpeed: 1000,
            navigation: false,
            pagination: false,
            afterAction: function (el) {
                var current = this.currentItem;
                $("#showcase-sync-2")
                    .find(".owl-item")
                    .removeClass("synced")
                    .eq(current)
                    .addClass("synced")
                if ($("#showcase-sync-2").data("owlCarousel") !== undefined) {
                    center(current)
                }
            },
            responsiveRefreshRate: 200,
        });
        sync2.owlCarousel({
            singleItem: true,
            slideSpeed: 1000,
            items: 1,
            mouseDrag: false,
            touchDrag: false,
            pagination: false,
            responsiveRefreshRate: 100,
            afterInit: function (el) {
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });
        $("#showcase-sync-2").on("click", ".owl-item", function (e) {
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo", number);
        });
        function center(number) {
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for (var i in sync2visible) {
                if (num === sync2visible[i]) {
                    var found = true;
                }
            }
            if (found === false) {
                if (num > sync2visible[sync2visible.length - 1]) {
                    sync2.trigger("owl.goTo", num - sync2visible.length + 1)
                } else {
                    if (num - 1 === -1) {
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            } else if (num === sync2visible[sync2visible.length - 1]) {
                sync2.trigger("owl.goTo", sync2visible[1])
            } else if (num === sync2visible[0]) {
                sync2.trigger("owl.goTo", num - 1)
            }
        }
    }
    // Drag & Drop Before - After
    var windowWidth = $(window).width(),
        haft_win = windowWidth / 2;
    $('.wrapper-after').width(windowWidth);
    $(window).resize(function () {
        var windowWidth = $(window).width();
        $('.wrapper-after').css('width', windowWidth + 'px');
    });
    $(function () {
        /*
         Dependencies : TweenMax and Draggable
         Test on touch device @ http://cloud.bassta.bg/before-after.html
         */
        var $dragMe = $("#dragme");
        var $beforeAfter = $("#before-after");
        var $viewAfter = $(".view-after");
        if ($("#dragme").length == 0)
            return;
        Draggable.create($dragMe, {
            type: "left",
            bounds: $beforeAfter,
            onDrag: updateImages
        });
        //Intro Animation
        animateTo(haft_win);
        $(window).resize(function () {
            var windowWidth = $(window).width(),
                haft_win = windowWidth / 2;
            animateTo(haft_win);
        });
        function updateImages() {
            var logo = $('.wrapper-logo').offset().left,
                drag = $('#dragme').offset().left;
            if (drag < logo)
                $('.wrapper-logo').addClass('red');
            else
                $('.wrapper-logo').removeClass('red');
            TweenLite.set($viewAfter, {width: $dragMe.css("left")});		//or this.x if only dragging
        }

        function animateTo(_left) {
            TweenLite.to($dragMe, 1, {left: _left, onUpdate: updateImages});
        }

        //V2 Click added
        $beforeAfter.on("click", function (event) {
            var eventLeft = event.clientX - $beforeAfter.offset().left;
            animateTo(eventLeft);
        });
    });//end jQuery wrapper
    //init rating score
    $('div.rating').raty({
        score: function () {
            return $(this).attr('data-score');
        },
        readOnly: true,
        starType: 'i',
        half: true,
        path: et_globals.imgURL + 'raty/',
        starHalf: 'star-half.png',
        starOff: 'star-off.png',
        starOn: 'star-on.png',
    });
    //nicescroll
    $(".sub-main-nav").niceScroll();
    // Scroll-to
    $(".link-to-wrapper").click(function () {
        var that = $(this).attr('data-link-to');
        $('html, body').animate({
            scrollTop: $("#" + that).offset().top - 70
        }, 1000);
    });
    if ($('.parentHorizontalTab').length > 0) {
        // Horizontal Tab
        $('.parentHorizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            use_hash: false, // disable hash in URL
            tabidentify: 'hor_1', // The tab groups identifier
            activetab_bg: false, // background color for active tabs in this group
            inactive_bg: false, // background color for inactive tabs in this group
            active_border_color: false, // border color for active tabs heads in this group
            active_content_border_color: false // border color for active tabs contect in this group so that it matches the tab head border
        });
    }
    // Sticky menu sale page
    $('.link-intro-sale-page-wrapper').waypoint('sticky', {
        wrapper: '<div class="link-sale-stuck-sticky">',
        stuckClass: 'stuck-sticky'
    });
    // OneEngine
    // if ($('#oe-thanks-page').length){
    // 	location.href="//www.enginethemes.com/files/oneengine-v1.1.zip";
    // }
    $('#link_oneengine').click(function () {
        location.href = "//www.enginethemes.com/thanks?dl=oe";
    });
    $("#download_oneengine").click(function (event) {
        event.preventDefault();
    });
    $("#subscribe_diningengine").click(function (event) {
        event.preventDefault();
    });
    // hide submenu
    $(document).mouseup(function (e) {
        var container = $(".sub-main-nav");
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            //container.hide();
            container.removeClass('sub-width');
            $('#header_menu').fadeIn('slow');
        }
    });
    //Scroll show/hide menu
    var mywindow = $(window),
        header = $('#header-wrapper'),
        mypos = mywindow.scrollTop(),
        up = false,
        newscroll;
    mywindow.scroll(function () {
        newscroll = mywindow.scrollTop();
        if (mypos > 100 && newscroll > mypos && !up) {
            header.stop().animate({
                top: '-90px'
            }, 50);
            up = !up;
            // console.log(up);
        } else if (newscroll < mypos && up) {
            header.stop().animate({
                top: '0'
            }, 50);
            up = !up;
        }
        mypos = newscroll;
        //when user scrolled to bottom
        if (mywindow.scrollTop() + mywindow.height() == $(document).height()) {
            header.stop().animate({
                top: '0'
            }, 50);
        }
    });

    // event tracking code, only for sale page
    if ($('#sale-page').length) {

        dataLayer.push({
            'pageCategory': 'salepage',
            'visitorType': 'high-value'
        });

        // Debug flag
        var debugMode = false;

        // Default time delay before checking location
        var callBackTime = 100;

        // # px before tracking a reader
        var readerLocation = 150;

        // Set some flags for tracking & execution
        var timer = 0;
        var scroller = false;
        var endContent = false;
        var didComplete = false;

        // Set some time variables to calculate reading time
        var startTime = new Date();
        var beginning = startTime.getTime();
        var totalTime = 0;

        // Get some information about the current page
        var pageTitle = document.title;

        // Track the aticle load
        if (!debugMode) {
            dataLayer.push({
                'event': 'salepageEvent',
                'eventCategory': 'Reading',
                'eventAction': 'Scroll',
                'eventLabel': 'ArticleLoaded'
            });
            //_gaq.push(['_trackEvent', 'Reading', 'ArticleLoaded', '', , true]);
        } else {
            console.log('The page has loaded. Woohoo.');
        }

        // Check the location and track user
        var trackLocation = function () {
            bottom = $(window).height() + $(window).scrollTop();
            height = $(document).height();

            // If user starts to scroll send an event
            if (bottom > readerLocation && !scroller) {
                currentTime = new Date();
                scrollStart = currentTime.getTime();
                timeToScroll = Math.round((scrollStart - beginning) / 1000);
                if (!debugMode) {
                    dataLayer.push({
                        'event': 'salepageEvent',
                        'eventCategory': 'Reading',
                        'eventAction': 'Scroll',
                        'eventLabel': 'StartReading',
                        'eventValue': timeToScroll
                    });
                    //_gaq.push(['_trackEvent', 'Reading', 'StartReading', '', timeToScroll]);
                } else {
                    console.log('started reading ' + timeToScroll);
                }
                scroller = true;
            }

            // If user has hit the bottom of the content send an event
            if (( bottom >= ( $('#sale-page').scrollTop() + ($('#sale-page').innerHeight() * 3 / 4 ) ) ) && !endContent) {
                // console.log('current position' + bottom);
                // console.log('innerheight of sale page: ' + $('#sale-page').innerHeight());
                currentTime = new Date();
                contentScrollEnd = currentTime.getTime();
                timeToContentEnd = Math.round((contentScrollEnd - scrollStart) / 1000);
                if (!debugMode) {
                    dataLayer.push({
                        'event': 'salepageEvent',
                        'eventCategory': 'Reading',
                        'eventAction': 'Scroll',
                        'eventLabel': 'ContentBottom',
                        'eventValue': timeToContentEnd
                    });
                    //_gaq.push(['_trackEvent', 'Reading', 'ContentBottom', '', timeToContentEnd]);
                } else {
                    console.log('end content section ' + timeToContentEnd);
                }
                endContent = true;
            }

            // If user has hit the bottom of page send an event
            if (bottom >= height && !didComplete) {
                currentTime = new Date();
                end = currentTime.getTime();
                totalTime = Math.round((end - scrollStart) / 1000);
                if (!debugMode) {
                    if (totalTime < 60) {
                        dataLayer.push({
                            'ReaderType': 'Scanner'
                        });
                        //_gaq.push(['_setCustomVar', 5, 'ReaderType', 'Scanner', 2]);
                    } else {
                        dataLayer.push({
                            'ReaderType': 'Reader'
                        });
                        //_gaq.push(['_setCustomVar', 5, 'ReaderType', 'Reader', 2]);
                    }
                    dataLayer.push({
                        'event': 'salepageEvent',
                        'eventCategory': 'Reading',
                        'eventAction': 'Scroll',
                        'eventLabel': 'PageBottom',
                        'eventValue': totalTime
                    });
                    //_gaq.push(['_trackEvent', 'Reading', 'PageBottom', pageTitle, totalTime]);
                } else {
                    console.log('bottom of page ' + totalTime);
                }
                didComplete = true;
            }
        }

        // Track the scrolling and track location
        $(window).scroll(function () {
            if (timer) {
                clearTimeout(timer);
            }

            // Use a buffer so we don't call trackLocation too often.
            timer = setTimeout(trackLocation, callBackTime);
        });
    }

    $("#product").change(function (e) {
        $('#overlay').addClass('loading-filter');
        e.preventDefault();
        var product_id = $(this).val();
        $.ajax({
            type: 'post',
            dataType: 'html',
            url: et_globals.ajaxURL,
            data: {action: 'et_select_product', product_id: product_id, security: et_globals.nonce_select_product},
            success: function (response) {
                $('#overlay').removeClass('loading-filter');
                $('#version').html(response);
            }
        });
    });

    $('.three-party-plugin').change(function () {
        var checked = $(this).val();
        if (checked == 'Yes') {
            $('.three-party-plugin-wrap').after('<textarea name="et_form[three_party_plugin_name]" id="three-party-plugin-name" class="form-control three-party-plugin-name" rows="3" placeholder="Please list them out..." required></textarea>')
        } else if (checked == 'No') {
            $('#three-party-plugin-name').remove();
        }
    });

    // Show the login dialog box on click
    $('a#show_login').on('click', function (e) {
        $('body').prepend('<div class="login_overlay"></div>');
        $('form#idea-login').fadeIn(500);
        $('div.login_overlay, form#idea-login a.close').on('click', function () {
            $('div.login_overlay').remove();
            $('form#idea-login').hide();
        });
        e.preventDefault();
    });

    // Perform AJAX login on form submit
    $('form#idea-login').on('submit', function (e) {
        $('form#idea-login p.status').show().text(et_globals.loading_message);
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: et_globals.ajaxURL,
            data: {
                'action': 'et_ajax_login',
                'username': $('form#idea-login #username').val(),
                'password': $('form#idea-login #password').val(),
                'security': $('form#idea-login #security').val()
            },
            success: function (data) {
                $('form#idea-login p.status').text(data.message);
                if (data.loggedin == true) {
                    document.location.href = et_globals.currenturrl;
                }
            }
        });
        e.preventDefault();
    });
});
