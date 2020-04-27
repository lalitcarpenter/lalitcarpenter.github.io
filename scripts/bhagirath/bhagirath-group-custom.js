/*
	Load more content with jQuery - May 21, 2013
	(c) 2013 @ElmahdiMahmoud
*/









 // $('.modal').on('shown.bs.modal', function () {
 // $('.modal video')[0].play();
// })


 $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
    } else {
       $('.headerSec .fixed-top').removeClass('sticky-header');
    }
});

$(document).ready(function () {


    var list = $(".business .col-lg-3");
    var numToShow = 4;
    var button = $("#loadMore");
    var numInList = list.length;
    list.hide();
    if (numInList > numToShow) {
        button.show();
    }
    list.slice(0, numToShow).show();

    button.click(function () {
        var showing = list.filter(':visible').length;
        list.slice(showing - 1, showing + numToShow).fadeIn();
        var nowShowing = list.filter(':visible').length;
        if (nowShowing >= numInList) {
            button.hide();
        }
    });

	$(".loadmore-content p").slice(0, 1).show();
  $(".loadMore").on("click", function(e){
    e.preventDefault();
	$(".loadMore").toggleClass("d-block d-none");
    $(".loadmore-content p").toggleClass("d-none");
	$(".loadmore-content ul").toggleClass("d-none");
	$("p.loadMore").text("").show(1000);
	$(".arrow.loadMore").text("Read more ").show(1000);
	  $('<i class="fa fa-chevron-down"/>').appendTo('.arrow.loadMore');
	if($(".loadmore-content p:hidden").length == 0) {
	  $(".arrow.loadMore").text("Read less ").show(1000);
	  $(' <i class="fa fa-chevron-up"/>').appendTo('.arrow.loadMore');
	  $(".arrow.loadMore").show(1000);
    }

  });

 $('.topMenu .dropdown').click(function(){
$(this).toggleClass('active');
});
$('.topMenu .dropdown a').click(function(){
// $('.topMenu .dropdown .dropdown-menu').css('height', '0px').css('overflow', 'hidden').css('padding', '0px');
});
$('.topMenu .dropdown').click(function(){$(this).parent('.topMenu .dropdown:after').css('transform', 'rotate(0deg)');});


/*jQuery( '.folding-menu' ).foldingContent({
	    menuSelector: '.folding-menu',
	    menuItemSelector: '.menu-item',
	    contentSelector: '.folding-content',
	    unfoldBeforeMarkup: '<li>',
	    unfoldAfterMarkup: '</li>',
	    closeMarkup: '&times;'
	  });*/

	  $(document).ready(function(){
		  $(".product-filter").click(function(){
		   $(this).closest('.products-container').find(".filter-content").toggle()

		  });
		});

	  $(document).ready(function() {
	    // Configure/customize these variables.
	    var showChar = 100;  // How many characters are shown by default
	    var ellipsestext = "...";
	    var moretext = "Read More";
	    var lesstext = "Read Less";


	    $('.more').each(function() {
	        var content = $(this).html();

	        if(content.length > showChar) {

	            var c = content.substr(0, showChar);
	            var h = content.substr(showChar, content.length - showChar);

	            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

	            $(this).html(html);
	        }

	    });

	    $(".morelink").click(function(){
	        if($(this).hasClass("less")) {
	            $(this).removeClass("less");
	            $(this).html(moretext);
	        } else {
	            $(this).addClass("less");
	            $(this).html(lesstext);
	        }
	        $(this).parent().prev().toggle();
	        $(this).prev().toggle();
	        return false;
	    });
	});

	 $(window).on('load', function(){
	  	if($('.mg-space-multiple').length){
	        $('.mg-space-init4').mgSpace();
	    }
	  })

// $('.modal').on('hide.bs.modal', function(e) {
    // var $if = $(e.delegateTarget).find('iframe');
    // var src = $if.attr("src");
    // $if.attr("src", '');
    // $if.attr("src", src);
// });

$('body').on('hidden.bs.modal', '.modal', function () {
$('video').trigger('pause');
});

 $(".view-all video").each(function(){
    $(this).get(0).pause();
});
$('.modal').on('hidden.bs.modal', '.modal', function () {
$('.modal video').trigger('pause');
});
var $videoSrc2;
$('#videos2').click(function() {
    $videoSrc2 = $(this).data( "src" );
	$('.videoss2').get(0).pause();
});
var $videoSrc3;
$('#videos3').click(function() {
    $videoSrc3 = $(this).data( "src" );
	$('.videoss3').get(0).pause();
});

  $("#videos1").on('hidden.bs.modal', function (e) {
        $(".videoss1").attr("src", $(".videoss1").attr("src"));
    });
	$("#videos2").on('hidden.bs.modal', function (e) {
        $(".videoss2").attr("src", $(".videoss2").attr("src"));
    });
	$("#videos3").on('hidden.bs.modal', function (e) {
        $(".videoss3").attr("src", $(".videoss3").attr("src"));
    });
});






/*Scroll*/
$('.click-scroll a').click(function (e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
        var scrollTo = target.offset().top;
        $('body, html').animate({ scrollTop: scrollTo + 'px' }, 800);
    }
});
$(function () {
    $('#investor-select select').change(function () {
        $('.investor-m-block').hide();
        $('.inv-tabs-query').hide();
        $('.tab-inv').hide();
        $('.' + $(this).val()).show();
    });
});
$(document).ready(function () {
 $('.single-slide').owlCarousel({
	loop: true,
	margin: 0,
	responsiveClass: true,
	autoplayTimeout: 3000,
	autoplay: true,
	nav:true,
	dots:false,
	navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
	responsive: {
	  0: {
		items: 1,
		nav:false
	  },
	  600: {
		items: 1
	  },
	  1000: {
		items: 1
	  }
	}
  })
  $('#about-banner').owlCarousel({
		loop: true,
		margin: 0,
		responsiveClass: true,
		autoplayTimeout: 2000,
		autoplay: true,
		autoHeight:true,
		mouseDrag: true,
		navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		responsive: {
		  0: {
			items: 1,
			nav:false,
			dots:false,
		  },
		  960: {
			items: 1,
			nav:false,
			dots:false,
		  },
		  1100: {
			items: 1,
			nav:true,
			dots:false,
		  }
		}
	  })

	  $('.aboutslider').owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		autoplayTimeout: 2000,
		autoplay: true,
		autoHeight:true,
		mouseDrag: true,
		nav:true,
		dots:false,
		navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		responsive: {
		  0: {
			items: 2
		  },
		  960: {
			items: 2
		  },
		  1100: {
			items: 3
		  }
		}
	  })
    /*
    $('.searchIcon').click(function() {
        $('.search-main').toggleClass("d-block").css('opacity', '1');
        $('.searchIcon').css('position','absolute').css('z-index', '9');
        // Alternative animation for example
        // slideToggle("fast");
      });*/

    $('.viewall').click(function () {
        $('.ft-business li').removeClass('d-none');
        $('.viewall').addClass('d-none');
    });
    $('.sitemap-link').click(function () {
        $('.ft-mobilemenu').removeClass('d-none');
        $('.sitemap-link').addClass('d-none');
        $('.sitemap-link').removeClass('d-block');
    });

    // Fakes the loading setting a timeout
    setTimeout(function () {
        $('body').addClass('loaded');
    }, 1500);




    /*Home Video Slider*/
    var owl = $('.homeslider');
    owl.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoHeight:true,
        lazyload: true,
		 autoplay: true,
		autoplayTimeout: 2500,
		slideSpeed: 300,
        items: 1
    })
    owl.on('translate.owl.carousel', function (e) {
        $('.homeslider .owl-item video').each(function () {
            $(this).get(0).pause();
        });
    });
    $('.homeslider .owl-item .item').each(function () {
        var attr = $(this).attr('data-videosrc');
        if (typeof attr !== typeof undefined && attr !== false) {
            var videosrc = $(this).attr('data-videosrc');
            $(this).prepend('<video muted><source src="' + videosrc + '" type="video/mp4"></video>');
            $('.homeslider .owl-item.active video').attr('autoplay', true).attr('loop', true);
        }
    });
    owl.on('translated.owl.carousel', function (e) {
        $('.homeslider .owl-item.active video').get(0).play();
    });


    $('#footerArrow').click(function () {
        $('.footerPanel2 .mobile-none').toggleClass('d-none');
        $('.footerPanel2 .footerpanel-1').toggle(100);
        $('.footerPanel2 .txt-center').toggle(100);
        $('.footerPanel2 .ft-submenu').toggleClass('col-lg-12');
    });

    if ($(window).width() <= 992) {
        $("#loadMore").text('Load more');
        $(function () {
            $(".business .col-lg-3").slice(0, 4).show();
            var cnt = 0;
            $("#loadMore").on('click', function (e) {
                cnt = cnt + 1;
                $(".business .col-lg-3:hidden").slice(0, 4).slideDown('slow', function () {
                    if (cnt == 2) {
                        $("#loadMore");
                        $("#loadMore").text('Explore more');
                        $("#loadMore").attr('href', 'businesses.html');
                    }
                });
            });
        });
    }
    else {
        $("#loadMore").attr('href', 'businesses.html');
        // Hide Header on scroll down
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = 100;

        $(window).scroll(function (event) {
            didScroll = true;
        });

        setInterval(function () {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);
        function hasScrolled() {
            var st = $(this).scrollTop();

            // Make sure they scroll more than delta
            if (Math.abs(lastScrollTop - st) <= delta)
                return;

            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight) {
                // Scroll Down
                $('#back-to-top').fadeIn();
                $('.headerTopBar').removeClass('nav-down');
                $('.navPanel').addClass('sticky-header').css('top', '0px');;
            } else {
                // Scroll Up
                if (st + $(window).height() < $(document).height()) {
                    $('.headerTopBar').addClass('nav-down');
                    $('.navPanel').css('top', '0px');
                }
            }
            if (st == 0) {
                $('.headerTopBar').removeClass('nav-down');
                $('.navPanel').removeClass('sticky-header');
                $('#back-to-top').hide();
            }
            lastScrollTop = st;
        }

        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

    }

    $('#sustanibility').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
        autoplaytimeout: 2000,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        slideSpeed: 1500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })

    $('#consumer-essential').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaytimeout: 2000,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        slideSpeed: 1500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })

    $('#industry-essential').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaytimeout: 2000,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        slideSpeed: 1500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })





    $('#industry').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
        autoplaytimeout: 1500,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        slideSpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })

    $('#resources').owlCarousel({
        loop: false,
        margin: 0,
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplaytimeout: 2000,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        slideSpeed: 1500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })

    $('.single-item').owlCarousel({
        loop: false,
        margin: 0,
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplaytimeout: 2000,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        slideSpeed: 1500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.three-item').owlCarousel({
        loop: false,
        margin: 20,
        responsiveClass: true,
        autoplay: true,
        autoplaytimeout: 1000,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        slideSpeed: 1500,
        autoplayHoverPause: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false
            },
            600: {
                items: 2,
                nav: false,
                dots: false
            },
            1000: {
                items: 3,
                nav: false,
                dots: false
            }
        }
    })

    $('#other-ventures').owlCarousel({
        loop: true,
        margin: 30,
        autoplaytimeout: 2000,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        slideSpeed: 1500,
        autoplay: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                dots: false
            },

            300: {
                items: 2,
                nav: false,
                dots: false
            },
            420: {
                items: 3,
                nav: false,
                dots: false
            },
            576: {
                items: 4,
                nav: false,
                dots: false
            },
            768: {
                items: 4,
                nav: true,
                dots: false,
                dots: false
            },
            1000: {
                items: 7,
                nav: true,
                dots: false,
                loop: false
            }
        }
    })

    /* Menu on mobile devices */

    $('#dismiss, .overlay, .overlay-top').on('click', function () {
        $('#sideNav').removeClass('active');
        $('.overlay, .overlay-top').removeClass('active');
        $('#topMenu').removeClass('active');
    });

    /*Side menu on mobile devices*/

    $('#sidebarCollapse').on('click', function () {
        $('#sideNav, #mainContent').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('.overlay').addClass('active');
        //$('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    /* Top menu on mobile devices*/

    $('#topNavCollapse').on('click', function () {
        $('#topMenu').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('.overlay-top').toggleClass('active');

    });





 function CloseModal(count) {
    jQuery('#' + count + " " + 'iframe').attr("src", jQuery("#" + count + " " + "iframe").attr("src"));
}


$('.modal .close').click(function(){

		 var videoId=$(this).attr('Id');
		 CloseModal(videoId);

	 });

$('body').on('hidden.bs.modal', '.modal', function () {
$('video').trigger('pause');
});

 $("#SuPoshanProject  video").each(function(){
    $(this).get(0).pause();
});





    $('input[type="checkbox"]').click(function () {
     //   $('.folding-menu li').addClass('hide');
        $(this).closest('.products-container').find('.folding-menu.mg-rows li').addClass("hide");
        var filterCon = $(this).closest('.filter-content').find('input:checked');
        var x, i;
        x =  $(this).closest('.products-container').find('.folding-menu.mg-rows li');
        w3RemoveClass(x, "show");

		if(filterCon.length>=1)
		{

        $(filterCon).each(function () {
            var ids = $(this).attr('value');
            for (i = 0; i < x.length; i++) {

                if (x[i].className.toLowerCase().indexOf(ids) > -1) {
                    w3AddClass(x[i], "show");
                }
            }

        });
		}
		else
		{
			  $(this).closest('.products-container').find('.folding-menu.mg-rows li').addClass("show");



		}


        //if ($(this).prop("checked") == true) {
        //    var ids = $('input:checkbox:checked').val();


        //    var x, i;
        //    x = document.getElementsByClassName("column");
        //    for (i = 0; i < x.length; i++) {
        //        w3RemoveClass(x[i], "show");
        //        if (x[i].className.toLowerCase().indexOf(ids) > -1) {
        //            w3AddClass(x[i], "show");
        //        }
        //    }
        //}

    })



    //function FilterProduct1(obj) {
    //    var filterCon = $(obj).closest('.filter-content').find('input:checked');
    //    var x, i;
    //    x = $(obj).closest('.filter-content').find("column");
    //    w3RemoveClass(x, "show");
    //    $(filterCon).each(function () {
    //      var ids =  $(this).attr('name');



    //    for (i = 0; i < x.length; i++) {

    //        if (x[i].className.toLowerCase().indexOf(ids) > -1) {
    //            w3AddClass(x[i], "show");
    //        }
    //        }

    //    });
    //}
    function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
        }
    }

    function w3RemoveClass(x, name) {

        for (var j = 0; j < x.length; j++) {
            var element = x[j]
            var i, arr1, arr2;
            arr1 = element.className.split(" ");
            arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                while (arr1.indexOf(arr2[i]) > -1) {
                    arr1.splice(arr1.indexOf(arr2[i]), 1);
                }
            }
            element.className = arr1.join(" ");

        }
    }

})


//for newsroom
    $(function () {
        $('#btn-mrelease').change(function () {
            $('.media-r').hide();
            $('.m-loadMore').hide();
            $('#' + $(this).val()).show();
        });
    });





$(document).ready(function () {
    // Handler for .ready() called.
	var hash_section = location.hash;
	console.log(hash_section);
    $('html, body').animate({
            scrollTop: $('.products-container '+hash_section).offset()
			}, 'slow');

})



$(document).ready(function() {
  $('#video-01').on('hidden.bs.modal', function() {
    var $this = $(this).find('iframe'),
      tempSrc = $this.attr('src');
    $this.attr('src', "");
    $this.attr('src', tempSrc);
  });

});
$('.modal').on('hide.bs.modal', function(e) {
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr("src");
    $if.attr("src", '');
    $if.attr("src", src);
});


$(document).ready(function() {
$('.ProjectAssetsDataInner').hide();
$('#DefaultData').show();
$('#DefaultData2').show();
	$('#buss-owl').owlCarousel({
		items : 2,
		itemsDesktop : [1000,2],
        itemsDesktopSmall : [900,2],
		itemsTablet: [640,1],
		pagination:true,

	});

$('.pointer').click(function(){
   $('.tab-panea').hide();
   $('.ProjectAssetsDataInner').hide();
   var getTabId = $(this).attr('rel');
   $('#'+getTabId).show();
   $(".indiaMap a").attr("class", "pointer");
   $(this).attr("class", "active");
});
});
