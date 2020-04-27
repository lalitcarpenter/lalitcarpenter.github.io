$(document).ready(function () {
    let autoSuggest;

    /* content restriction for cards */

    /* Set youtube Video Height Starts */
    $(function () {

        $('#myVideo').parent().removeClass('def-VideoHeight');
    });
    /* Set youtube Video Height End */

    /* Subscribe footer banner - Start */

    //function to set Cookie for subscribe 
    /*
     * function to set Cookie for subscribe 
     *
     * @param string cookieName is to get cookiename
     * @param string cookievalue is to get cookievalue
     */
    function setCookie(cookieName, cookievalue) {
        var dateObj = new Date();
        var expires = "expires=" + dateObj.toGMTString();
        document.cookie = cookieName + "=" + cookievalue + ";path=/";
    }

    //function to get Cookie
    function getCookie(cookieName) {
        var name = cookieName + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    /* Disclaimer Start */
    var pageRestrict = $("#isRestricted").val();
    if (pageRestrict == 'true') {
        var userDisclaimerClosed = getCookie("disclaimerClose");
        if (userDisclaimerClosed == "" || userDisclaimerClosed == "false") {
            $("#disclaimerModal").modal();
        }
    }
    $('#disc-submit').click(function () {
        event.preventDefault();
        $('#disclaimerModal').modal('hide');
        setCookie("disclaimerClose", "true");
    });
    /* Disclaimer End */

    /* Cookie Start */
    $(".button-cookie-small").click(function () {
        $("#cookie-policy").hide();
        setCookie("cookieClose", "true");
    });
    /* Cookie End */

/*covid-19*/

 $(document).ready(function(){

    var originalpath = window.location.pathname;
    var extractedpagePath = originalpath.substring(originalpath.lastIndexOf("/") + 1, );
    var finalpath = extractedpagePath.substring(0, extractedpagePath.lastIndexOf("."));
   //alert(finalpath);
   var stg = window.location.href;

   if(finalpath =='home-page'){
   $(".rolrbtn").css("display", "block");
   }
 else if(stg == 'https://stg.olamgroup.com/'){
   $(".rolrbtn").css("display", "block");
   }
else if(stg == 'https://www.olamgroup.com/'){
   $(".rolrbtn").css("display", "block");
   } 
   else{
 		$("div").removeClass("newclass");
        $("div>a").removeClass("continueclass");
 }

   // $(window).resize(function(){  

	if ($(window).width() <= 800 && finalpath !='home-page'){
       
        $(".cookies-panel").css("height", "230px");

	}	
//});


});
    /*covid-19*/



    //code to check cookie value 
    function checkCookie() {
        var userClosed = getCookie("subscribeClose");
        var userDisclaimerClosed = getCookie("disclaimerClose");
        var userCookieClosed = getCookie("cookieClose");
        if (userClosed == "" || userClosed == "false") {
            $(".notify-wrapper").show();
        }
        if (userDisclaimerClosed == "" || userDisclaimerClosed == "false") {
            $('#disclaimerModal').modal('show');
        }
        if (userCookieClosed == "" || userCookieClosed == "false") {
            $("#cookie-policy").show();
        }
    }

    checkCookie();

    //code to Hide subscribe tab from the page on click of close icon
    $(".close-btn").click(function () {
        $(".notify-wrapper").hide();
        setCookie("subscribeClose", "true");
    });

    //code to Hide subscribe tab from the page on click of close icon in small devices
    $(".mobile-close img").click(function () {
        $(this).parents(".navigator").slideUp().removeClass("in");
    });

    /* Subscribe footer banner - End */

    // slick carousel
    var multiCarousel = $(".carousel");

    multiCarousel.each(function () {
        if ($(this).is("#growingCarousel")) {
            $(this).not('.slick-initialized').slick({
                slidesToShow: 1,
                adaptiveHeight: true,
                dots: true,
                arrows: false,
                mobileFirst: true,
                autoplay: false,
                speed: 0,
                cssEase: 'linear'
            });
        } else if ($(this).is("#productCarousel")) {
            $(this).not('.slick-initialized').slick({
                slidesToShow: 1,
                adaptiveHeight: true,
                dots: true,
                speed: 0,
                arrows: false,
                customPaging: function (productCarousel, i) {
                    i = i + 1;;
                    var thumb = $(productCarousel.$slides[i]).data();
                    return '<a class="productListNumber">' + i + '</a>';
                },
                mobileFirst: true,
                cssEase: 'linear'
            });
        } else if ($(this).hasClass("js-eventcarousel")) {
            if ($(this).find(".slider-card").length > 1) {
                $(this).not('.slick-initialized').slick({
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    dots: true,
                    arrows: false,
                    speed: 0,
                    mobileFirst: true,
                    cssEase: "linear"
                });
            }
        } else {
            $(this).not('.slick-initialized').slick();
        }
    })

    // you tube video in Tabbed component

    $(".productListNumber").click(function (e) {
        e.preventDefault();
        // changes the iframe src to prevent playback or stop the video playback
        $('.iframe-yt').each(function (index) {
            $(this).attr('src', $(this).attr('src'));
        });
    });

    //  Search modal show hide

    $("#fireSearchModal").click(function () {
        $("#searchModal").modal();
        $(".navbar").hide();
        $("#ulCategory").toggleClass("search-scroll");
    });

    //code to hide navbar menu when search modal is active

    $("body").on("click", ".search-modal-dialog", function (e) {
        if ($(e.target).hasClass('search-modal-dialog')) {
            var hidePopup = $(e.target.parentElement).attr('id');
            $('#' + hidePopup).modal('hide');
            $(".navbar").show();
            $("#ulCategory").hide();
            $('#search-form').trigger('reset');
            $("#ulCategory").children('li').remove();
        }
    });

    // code to Hide search modal and show navbar menu

    $("body").on("click", ".close-btn-search-modal", function (e) {
        var hidePopup = $(e.target.parentElement).attr('id');
        $('#' + hidePopup).modal('hide');
        $(".navbar").show();
        $("#ulCategory").hide();
        $('#search-form').trigger('reset');
        $("#ulCategory").children('li').remove();
        $("#ulCategory").toggleClass("search-scroll");
    });

    /* carousel for 3 Tiles - Start */

    var UNSLICK_AT = 992;

    var $win = $(window);
    var $wrapper = $('.tile-slider');

    if ($wrapper.length) {
        // Listen for resize when the unslick breakpoint is hit
        $wrapper.on('breakpoint', function (e, s, bp) {
            $win.on('resize', onWindowResize);
        });

        // Check once at page load if we're already at the large screen size
        if ($win.outerWidth() > UNSLICK_AT) {
            $win.on('resize', onWindowResize);
        }

        init();
    }

    function init() {
        $wrapper.not('.slick-initialized').slick({
            adaptiveHeight: true,
            dots: true,
            arrows: false,
            mobileFirst: true,
            speed: 0,
            responsive: [{
                breakpoint: UNSLICK_AT,
                settings: "unslick"
            }]
        });
    }

    function onWindowResize() {
        if ($win.outerWidth() < UNSLICK_AT + 1) {
            // Re-initialize Slick and turn off the window size listener
            init();
            $win.off('resize', onWindowResize);
        }
    }

    tileSliderSlick();
    $(window).on('resize', function () {
        tileSliderSlick();
    });

    function tileSliderSlick() {
        setTimeout(function () {
            if ($('.tile-slider').hasClass('slick-initialized')) {
                var parentWidth = $('.tile-slider .slick-slide').width();
                console.log(parentWidth);
                $('.tile-slider .slick-dots').width(parentWidth);
                $('.tile-slider .slick-list').css({
                    "margin-bottom": "40px"
                });
            }
        }, 100);
        if ($(window).innerWidth() < 768) {
            if ($('.tile-slider').hasClass('row')) {
                $('.tile-slider').removeClass('row');
                $('.tile-slider').addClass('shadow-8-10-15');
            }
            if ($('.tile-slider .card-wrapper').hasClass('shadow-8-10-15')) {
                $('.tile-slider .card-wrapper').removeClass('shadow-8-10-15');
                $('.tile-slider .card-wrapper').addClass('row');
            }
        } else {
            if ($('.tile-slider .card-wrapper').hasClass('row')) {
                $('.tile-slider .card-wrapper').removeClass('row');
                $('.tile-slider .card-wrapper').addClass('shadow-8-10-15');
            }
            if ($('.tile-slider').hasClass('shadow-8-10-15')) {
                $('.tile-slider').removeClass('shadow-8-10-15');
                $('.tile-slider').addClass('row');
            }
        }
    }
    /* carousel for 3 Tiles - End */

    /* Four tile start */
    if ($(window).innerWidth() >= 1023) {
        var fourTitleArr = [];
        $(".tile-img").each(function (index, value) {
            var currentHeight = $(this).outerHeight();
            console.log(currentHeight);
            fourTitleArr.push(currentHeight);
        });
        var maxTitleHeight = Math.max.apply(Math, fourTitleArr);
        console.log(maxTitleHeight);
        $(".tile-img").each(function (index, value) {
            $(this).height(maxTitleHeight);
        });
    }
    /* Four tile end */
    //added for search analytics feb'12'2020
    function searchAnlaytics(searchText, autoList, selectedText) {
        if (typeof _satellite != "undefined") {
            if (!digitalData.component.search) {
                digitalData.component["search"] = {};
                console.log("Search Erroe", digitalData.component.search)
            }
            digitalData.component.search["searchTerm"] = searchText;
            digitalData.component.search["autoSuggests"] = autoList;
            digitalData.component.search["suggestTerm"] = selectedText;
            if (searchText) {
                digitalData.component.search["suggestTerm"] = selectedText;
                console.log("test", selectedText)
                _satellite.track('searchSuggestSelection')
            } else {
                _satellite.track('internalSearch');
            }
        }
    }

    let count = 0;
    $("#suggest").on('keyup', function (e) {
        if ($(this).val().length > 3) {
            let eventCode = e.which;
            $("#ulCategory").show();
            var searchfield = $(this).val();

            if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode == 8 || event.keyCode == 13) {
                searchAnlaytics(searchfield, autoList);
                if (event.keyCode == 13) {
                    searchAnlaytics(searchfield, autoList);

                    window.open("/content/olamgroup/en/home-page/searchlanding.html?search=" + searchfield);
                    if (redirectUrl == undefined) {
                        redirectUrl = '/content/olamgroup/en/error/NoSearchResultsFound.html';
                    }
                   // window.location.href = redirectUrl;
                    return false
                } else {
                    var searchfieldSplit = $(this).val().split('–');
                    var searchfieldSplit1 = $(this).val().split('-');
                    var searchValue = "";
                    if (searchfieldSplit[1] != undefined) {
                        for (var i = 0; i < searchfieldSplit.length; i++) {
                            searchValue += searchfieldSplit[i] + " ";
                        }
                        searchfield = searchValue;
                    } else if (searchfieldSplit1[1] != undefined) {
                        for (var i = 0; i < searchfieldSplit1.length; i++) {
                            searchValue += searchfieldSplit1[i] + " ";
                        }
                        searchfield = searchValue;
                    }
                    e.preventDefault();
                    var request = $.ajax({
                        url: '/bin/search',
                        type: 'GET',
                        dataType: 'json',
                        cache: false,
                        data: {
                            'searchString': searchfield,
                            'param': (new Date()).getTime(),
                        },
                        success: function (response) {
                            console.log("Auto_Test", response)
                            var size = 10;
                            var list = response.slice(0, size);
                            console.log("Auto_Test1", list)
                            $("#ulCategory").children('li').remove();
                            if (list.length > 0) {
                                count = 0;
                                var analyticsAutoSuggests = "";
                                $.each(list, function () {
                                    $("#ulCategory").append("<li class='search-menu'><a  href='" + this.URL + "' class='search-menu-item container'><span class='search-title'>" + this.Title + "</span><span class='search-category'>" + this.Category + "</span></li>");
                                    analyticsAutoSuggests += this.Title + " - " + this.Category + "|";
                                });
                                autoList = analyticsAutoSuggests;
                                if (eventCode == 13) {
                                    searchAnlaytics(searchfield, autoList);
                                }
                            } else {
                                if (typeof _satellite != "undefined") {
                                    if (!digitalData.component.search) {
                                        digitalData.component["search"] = {};
                                    }
                                    digitalData.component.search["searchTerm"] = searchfield;
                                    if (count == 0) {
                                        _satellite.track('zeroSearchResult');
                                    }
                                    count++;
                                }
                                $("#ulCategory").children('li').remove();
                                $("#ulCategory").append("<li class='no-search'><span class='no-search-content container'>No Search Result Found </span></li>");
                            }
                        },
                    });
                }
            } else {

            }
        } else {
            $("#ulCategory").hide();
            $("#ulCategory").children('li').remove();
        }
    });









    $(".arrow").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
    //added for search analytics
    /* All News page Refine Section Show Scrpit Start */
    $(document).on("click", ".refine-btn", function (e) {
        if ($(this).next().hasClass('hidden-xs') || $(this).next().hasClass('hidden-sm') || $(this).next().hasClass('hidden-md')) {
            $(this).next().removeClass('hidden-xs hidden-sm hidden-md');
            if ($('.allnewsDate-wrapper').hasClass('hidden-xs') || $(".allnewsDate-wrapper").hasClass('hidden-sm') || $(".allnewsDate-wrapper").hasClass('hidden-md')) {
                $('.allnewsDate-wrapper').removeClass('hidden-xs hidden-sm hidden-md');
            }
            $(this).removeClass('visible-xs visible-sm visible-md').hide();
        }

    });

    /* All News page Refine Section Show Scrpit End */
    var accordCount = 1;
    //$(".accordion").each(function() {
    $(".panel-group.accordion-wrapper").each(function () {
        $(this).attr("id", "accordion" + accordCount);
        $(this).find(".panel-collapse").attr("for", "accordion" + accordCount);
        /*
        $(this).find(".accordion-toggle").attr("href", "#collapse"+accordCount);
        $(this).find(".panel-collapse").attr("id", "collapse"+accordCount);
        */
        /*if(accordCount==1) {
                                                $(this).find(".panel-collapse").addClass("in");
        }
        else {
                                                $(this).find(".accordion-toggle").addClass("collapsed");
        }*/
        $(this).find(".accordion-toggle").addClass("collapsed");
        accordCount++;
    });
    /*$(document).on("click", ".accordion-toggle", function() {
        $(".accordion .accordion-toggle").not($(this)).addClass("collapsed").attr("aria-expanded","false");
        $(".accordion .panel-collapse").not($(this).parents(".panel-heading").next()).removeClass("in").attr("aria-expanded","false");
    });*/

    /* Product grid mobile accordion start */
    $(".products-list-accordion .product-list-title").click(function () {
        $(".products-list-accordion .product-list-title").not($(this)).removeClass("active");
        $(".products-list-accordion .product-list-content").not($(this).next()).slideUp();
        $(this).toggleClass("active");
        $(this).next().slideToggle();
    });
    /* Product grid mobile accordion end */

    /* twoDmap height css Start */
    $(".twoDmap.parbase").each(function () {
        var mapHeight = $(this).find("#map-canvas").height();
        $(this).height(mapHeight);
    });
    /* twoDmap height css End */
});

/* Parallax - Start */

$(function () {
    var $elements = $('.ScrollAction.notAnimated'); //contains all elements of nonAnimated class
    var $window = $(window);
    $window.on('scroll', function (e) {
        $elements.each(function (i, elem) { //loop through each element
            if ($(this).hasClass('animated')) // check if already animated
                return;
            animateMe($(this));
        });
    });
});

function animateMe(elem) {
    var winTop = $(window).scrollTop(); // calculate distance from top of window
    var winBottom = winTop + $(window).height();
    var elemTop = $(elem).offset().top; // element distance from top of page
    var elemBottom = elemTop + ($(elem).height() / 4);
    if ((elemBottom <= winBottom) && (elemTop >= winTop)) {
        // exchange classes if element visible
        $(elem).removeClass('notAnimated').addClass('animated');
    }
}

/* Parallax - End */

/* Mini Menu start */
$(document).ready(function () {

    $(".mini-menu-list li").click(function () {
        $("li").removeClass("mini-active");
        $(this).addClass("mini-active");
    });

    $(".sub-list").hide();
    $(".main-list").on("click", function () {
        $(".main-list .glyphicon").toggleClass("glyphicon-menu-right").toggleClass("glyphicon-menu-down");
        $(".sub-list").toggle();
    });
    var selected_txt = $("#mini-select li.selected_txt").text();
    //$("#mini-select li.selected_txt").hide();
    $(".main-list span").text(selected_txt);
    $("#mini-select").on("click", "li", function () {
        $(this).siblings().show();
        $(this).siblings().removeClass('selected_txt');
        $(this).addClass('selected_txt');
        $(this).hide();
        selected_txt = $(this).text();
        $(".main-list span").text(selected_txt);
        $(".sub-list").slideToggle();
    });

});
/* Mini-Menu - End */

$(document).ready(function () {
    if (window.innerWidth > 767) {
        /* bgimagecard page specific css script start */
        $(".bgimagecard").each(function () {
            if ($(this).find('.purpose-block').hasClass("full-width-pos-bot-right")) {
                var cardHeight = $(this).find('.purpose-block').height();
                if (cardHeight > 283) {
                    var bgimagecardBottom = cardHeight - 283;
                    $(this).find(".purpose-wrapper > img").css("margin-bottom", bgimagecardBottom);
                }
            }
        });
        /* bgimagecard page specific css script end */
    }
});

/* HTML video component to autoplay */
$(document).ready(function () {
    var htmlVideoList = document.getElementsByClassName('js-featureVideo')
    for (var index = 0; index < htmlVideoList.length; index++) {
        htmlVideoList[index].play();
    }
});
/* HTML video component to autoplay */

/* content restriction for cards */

$(function () {

    var charSize = 7;
    var lineHeight = 21;

    $('.ellipse-holder').each(function () {
        var $ellipsisText = $(this);
        ellipseHolderHeight = $ellipsisText.outerHeight();
        ellipseHolderWidth = $ellipsisText.width();
        if (ellipseHolderHeight > 180) {
            lineHeight = 22;
        } else {
            lineHeight = 21;
        }
        titleHeight = $ellipsisText.find('h5').outerHeight(true);
        descHeight = ellipseHolderHeight - (titleHeight);
        charsperLine = ellipseHolderWidth / charSize;
        totalLine = descHeight / lineHeight;
        totalchars = Math.round((totalLine * charsperLine) * 90 / 100);
        var str = $ellipsisText.find('.ellipsis-content').text();
        var strLength = str.length;
        if (strLength > totalchars) {
            $ellipsisText.addClass("ellipsed");
            var res = str.substring(0, totalchars);
            $ellipsisText.find('.ellipsis-content').text(res);
        }
    });
});

$(document).ready(function () {

    $(".lp-dropdown-active").click(function () {
        $(this).find(".glyphicon").toggleClass("glyphicon-menu-down glyphicon-menu-up");
        $(this).next().slideToggle();
    });

    $(document).on("click", ".lp-dropdown-data a", function () {
        $(this).parents(".lp-dropdown-content").prev().find(".lp-dropdown-active-content").html($(this).html());
        $(this).parents(".lp-dropdown-content").slideToggle();
        $(this).parents(".lp-dropdown-content").prev().find(".glyphicon").toggleClass("glyphicon-menu-down glyphicon-menu-up");
    });
});

$(function () {

    var charSize = 9;
    var lineHeight = 27.6;

    $('.ellipse-holder').each(function () {
        var $ellipsisText = $(this);
        ellipseHolderHeight = $ellipsisText.outerHeight();
        ellipseHolderWidth = $ellipsisText.width();
        titleHeight = $ellipsisText.find('h3').outerHeight(true);
        descHeight = ellipseHolderHeight - (titleHeight);
        charsperLine = ellipseHolderWidth / charSize;
        totalLine = descHeight / lineHeight;
        totalchars = Math.round((totalLine * charsperLine) * 90 / 100);
        var str = $ellipsisText.find('.ellipsis-content').text();
        var strLength = str.length;
        if (strLength > totalchars) {
            $ellipsisText.addClass("ellipsed");
            var res = str.substring(0, totalchars);
            $ellipsisText.find('.ellipsis-content').text(res);
        }
    });

});

function jobAnlayticsWorldwide(jobRole, location, supplyChain) {
    console.log("testjob1");
    if (typeof _satellite != "undefined") {
        if (!digitalData.careers) {
            digitalData["careers"] = {};
            console.log("Job Error", digitalData.careers)
        }
        console.log("Main-test1")
        digitalData.careers.jobRole= jobRole;
        digitalData.careers.location = location;
        digitalData.careers.supplyChain = supplyChain;
        _satellite.track('jobApplication')
    }
}

$(".Worldwide.careers").click(function (e) {
    console.log("Main-test")
    let jobRole = "New Job"
    let location = "Worldwide"
    let supplyChain = "Olam"
    console.log("Job Test", supplyChain + location + jobRole);
    jobAnlayticsWorldwide(jobRole, location, supplyChain)
});

$(".Australia.careers").click(function (e) {
    console.log("Main-test")
    let jobRole = "New Job"
    let location = "Australia"
    let supplyChain = "Olam"
    console.log("Job Test", supplyChain + location + jobRole);
    jobAnlayticsWorldwide(jobRole, location, supplyChain)
});
$(".USA.careers").click(function (e) {
    console.log("Main-test")
    let jobRole = "New Job"
    let location = "USA"
    let supplyChain = "Olam"
    console.log("Job Test", supplyChain + location + jobRole);
    jobAnlayticsWorldwide(jobRole, location, supplyChain)
});
$(".Europe.careers").click(function (e) {
    console.log("Main-test")
    let jobRole = "New Job"
    let location = "Europe"
    let supplyChain = "Olam"
    console.log("Job Test", supplyChain + location + jobRole);
    jobAnlayticsWorldwide(jobRole, location, supplyChain)
});


//window.onload = getPageinfo();
window.digitalData = {
    "page": {
        "pageInfo": {}
    },
    "component": {}
};

///Error (Function)
function trackError(errorurl) {
    if (typeof _satellite != "undefined") {
        var ErrorPage = errorurl;
        _satellite.track(errorurl);
    }
}

///Socialmedia links function
function trackLink(linkLocation, linkName) {
    if (typeof _satellite != "undefined") {
        if (!digitalData.component.link) {
            digitalData.component["link"] = {};
        }
        digitalData.component.link["linkName"] = linkName;
        digitalData.component.link["linkType"]=linkLocation;
        _satellite.track('linkClick');
    }
}

function trackSocialMediaLinks(linkName) {
    if (typeof _satellite != "undefined") {
        //reseting link object
        digitalData.component["link"] = {};
        digitalData.component.link["linkType"] = linkName;
        _satellite.track('linkClick');
    }
}


$(document).ready(function() {

   /*function trackAppNavigation(navListfromPagetoLastclickedTabPath) {
        alert("analytics");

        if (typeof _satellite != "undefined") {
            alert("inside the satillite1");
            // digitalData.page["pageInfo"]={};
			console.log("page name set startinganalyticsss");
            console.log(navListfromPagetoLastclickedTabPath);
            var navListLength = navListfromPagetoLastclickedTabPath.length;
                console.log(navListLength);
                pageName = "";

            if (navListLength > 3) {
                alert("navlist3");
                digitalData.page["siteSubSection2"] = navListfromPagetoLastclickedTabPath[3];
                console.log( digitalData.page["siteSubSection2"] );
                pageName = ":" + navListfromPagetoLastclickedTabPath[3];
                alert("first"+pageName);

            } else {
                digitalData.page["siteSubSection2"] = "";
            }
            if (navListLength > 2) {
                alert("navlist2");
                digitalData.page["siteSubSection1"] = navListfromPagetoLastclickedTabPath[2];
                pageName = ":" + navListfromPagetoLastclickedTabPath[2] + pageName;
                alert("second"+pageName);
            } else {
                digitalData.page["siteSubSection1"] = "";
            }
            if (navListLength > 1) {
                alert("navlist1");
                digitalData.page["siteSection"] = navListfromPagetoLastclickedTabPath[1];
                pageName = ":" + navListfromPagetoLastclickedTabPath[1] + pageName;
                 alert("third"+pageName);
            } else {
                digitalData.page["siteSection"] = "";
            }
            if (navListLength > 0) {
alert("navlist1");

                pageName = navListfromPagetoLastclickedTabPath[0] + pageName;
                alert("fourth"+pageName);
                digitalData.page["pageName"] = res;
                alert(res);

            }


			console.log("page name set complete");
        }
    }

     var currentPath = window.location.pathname.split("?");
    var extractPath = currentPath[0].substring(1, currentPath[0].length);
    var extractPathList = extractPath.split("/");
    var correctpath = extractPathList.pop();
    var res = correctpath.split(".", 1);
    trackAppNavigation(extractPathList);*/


/*    function trackAppNavigation(navListfromPagetoLastclickedTabPath) {
        if (typeof _satellite != "undefined") {
            // digitalData.page["pageInfo"]={};
            console.log("page name set startinga");
            var navListLength = navListfromPagetoLastclickedTabPath.length,
                pageName = "";

            if (navListLength > 3) {
                digitalData.page["siteSubSection2"] = navListfromPagetoLastclickedTabPath[3];
                pageName = ":" + navListfromPagetoLastclickedTabPath[3];
            } else {
                digitalData.page["siteSubSection2"] = "";
            }
            if (navListLength > 2) {
                digitalData.page["siteSubSection1"] = navListfromPagetoLastclickedTabPath[2];
                pageName = ":" + navListfromPagetoLastclickedTabPath[2] + pageName;
            } else {
                digitalData.page["siteSubSection1"] = "";
            }
            if (navListLength > 1) {
                digitalData.page["siteSection"] = navListfromPagetoLastclickedTabPath[1];
                pageName = ":" + navListfromPagetoLastclickedTabPath[1] + pageName;
            } else {
                digitalData.page["siteSection"] = "";
            }
            if (navListLength > 0) {
                pageName = navListfromPagetoLastclickedTabPath[0] + pageName;
                digitalData.page["pageName"] = pageName;
            }
        }
    }

   var currentPath = window.location.pathname.split("?");
    var extractPath = currentPath[0].substring(1, currentPath[0].length);
    var extractPathList = extractPath.split("/");
    trackAppNavigation(extractPathList);*/

    // digitalData.page.pageInfo["pageName"] = window.location.pathname.split("/").pop();
    // _satellite.track("loaded_page");

    /*function trackArticle(articleId, articleName, articlePublishDate, articleCategory, wordCount) {
        if (typeof _satellite != "undefined") {
            if (!digitalData.article) {
                digitalData["article"] = {};
            }
            digitalData.article["articleTitle"] = articleName;
            digitalData.article["articleID"] = articleId;
            var str = articlePublishDate
                                var res = str.replace(/\D/g, "");
            function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('');

}
            if (articlePublishDate != "")
            {
            digitalData.article["articleDate"] =Number(formatDate(articlePublishDate.split(' ')[2].split(',')[0]+' ' +res.split(2)[0]+ ','+articlePublishDate.split(' ')[3]));
            }
            digitalData.article["articleCategory"] = articleCategory;
            digitalData.article["wordCount"] = wordCount;
        }
    }

    var article_title_analytics = $(".article.parbase h3").text();
    var article_id_analytics = currentPath[0].split("/").pop()
    var article_date_analytics = $(".article.parbase .tile-date").text();
    var article_category_analytics = extractPathList[2];
    var article_word_count_analytics = $(".intro-content-1").text().split(" ").length;

    if (article_id_analytics != "" && article_title_analytics != "" || article_date_analytics != "") {
        trackArticle(article_id_analytics, article_title_analytics, article_date_analytics, article_category_analytics, article_word_count_analytics);
    }*/


    ///Error (Declaration)
    if ($(document).find("title").text() == '404') {
        // digitalData.page.content["Error Page"] = window.location.href;
        digitalData.page.is404Error = true;
         var currentPath = window.location.pathname.split("?");
    var extractPath = currentPath[0].substring(1, currentPath[0].length);
    var extractPathList = extractPath.split("/");
            trackAppNavigation(extractPathList);
    } else {
        digitalData.page.is404Error = false;
    }

    function getPageinfo() {
        if (typeof _satellite != "undefined") {
            if (!digitalData.page.content) {
                digitalData.page["content"] = {};
            }
            var referrer = document.referrer;
            digitalData.page.content["Previous Page Name"] = referrer;
            //_satellite.track("Previous Page Name");
        }
    }

    getPageinfo();

    $(".btn.notify-btn.full-width").click(function(e) {
        if (typeof _satellite != "undefined") {
            if (!digitalData.component.form) {
                digitalData.component["form"] = {};
            }
            digitalData.component.form["formName"] = "subscribe-entry-form";
            // digitalData.page.content["Form Start Event"] = "subscribe-form-show";
            _satellite.track('formStart');
        }
    });

    if($('#contact-myTab .active').text().trim()){
        digitalData.contacts={}
                                digitalData.contacts.filterType=$('#contact-myTab .active').text().trim();
    }


    $('#contact-myTab').click(function(e){
        setTimeout(function(){ 
            digitalData.olam={}
                                                digitalData.contacts.filterType=$('#contact-myTab .active').text().trim();
        }, 50);


    })

let region;
   $(".region-dropdown").click(function(e){
       console.log("regiontesting");
           setTimeout(function(){ 
                               var selText = $('.region-dropdown .lp-dropdown-active-content').text();
                                digitalData.olam={}
            console.log("****",selText);
            digitalData.mapLocation = selText;
                                region=selText.split('Select')[0];
                 _satellite.track('mapLocationClick')

    }, 50);




   // $("#tableButton").text(selText);
});

    //contactus filter






//let country;
    $(".contact-country").click(function(e){
        console.log("Testchk");
setTimeout(function(){ 
                               var selText = $('.contact-country .lp-dropdown-active-content').text();

                              //digitaData.contacts.location=region + '|'+ selText.split('Select')[0];
    digitalData.contacts.location = {};
    digitaData.contacts.location = selText;
     console.log("test1&&&&&&&&&", digitaData.contacts.location);
    //country=selText.split('Select')[0];
    console.log("&&&&&&&&&", country);
    _satellite.track('contactsFilter')

    }, 50);
    })



    $(".product-dropdown").click(function(e){
           setTimeout(function(){ 
                               var selText = $('.product-dropdown .lp-dropdown-active-content').text();
                                digitalData.product={}
                                digitalData.product.productName=selText;
               console.log("test2@@@@@@",selText);
               _satellite.track('contactsFilter')

    }, 50);
       })

    $(".submit-btn-title").click(function(e) {
        if (typeof _satellite != "undefined") {
            if (!digitalData.component.form) {
                digitalData.component["form"] = {};
            }

            var subscribeStatus = $("#subscribe").valid();
            if (subscribeStatus) {
                digitalData.component.form["formName"] = "subscribe-entry-form";
                // digitalData.page.content["Form Submission Event"] = "submit";
                _satellite.track('formSubmission');
            }
        }
    });
    
    ///Socialmedia links (Declaration)
    $(".main-footer a").click(function(e) {
        if (e.currentTarget.className === "info-content") {
            trackSocialMediaLinks(this.getAttribute("alt"));
        } else {
            trackLink("Footer", this.text);
        }
    });

    ///Socialmedia links (Declaration)
    $(".list-social a").click(function(e) {
        if (!digitalData.socialMedia) {
            digitalData["socialMedia"] = {};
        }
        digitalData.socialMedia["platform"] = this.text.trim();
            trackLink("Social Media", this.text);
    });

    ///Header links (Declaration)
    $(document).on("click",".navbar-nav a", function(){
        var currentLink = $(this).attr("href");
        if (currentLink.indexOf("products") > -1) {
            if (!digitalData.product) {
                digitalData["product"] = {};
            }
            var pathList = currentLink.split("/");
            digitalData.product["productName"] = pathList.pop().replace(".html", "");
            digitalData.product["productType"] = pathList[pathList.length - 1];
            trackLink("Product", this.text);
        } else {
            trackLink("Header", this.text);
        }
    });
    
    ///Side Navigation links (Declaration)
    $(document).on("click",".mini-menu a", function(){
        trackLink("Side Navigation", this.text);
    });
    

});


/*

function videoTrack(duration, videoName, player, playerTime) {
    if (typeof _satellite != "undefined") {
        console.log("Main-test2")
        if (!digitalData.component.video) {
            digitalData.component["video"] = {};
            console.log("video Error", digitalData.component.video)
        }
        console.log("video Erroe1", digitalData.component.video)

        digitalData.component.video.duration = duration;
        digitalData.component.video.videoName= videoName;
        digitalData.component.video.player = player;
        digitalData.component.video.playerTime= playerTime;

        _satellite.track('videoInteraction')
    }
}
$(".cocoa").click(function (e) {
    var symbol = $("iframe.youtube-videos")[0].src.indexOf("?") > -1 ? "&" : "?";
    $("iframe.youtube-videos")[0].src += symbol + "autoplay=1";
    let duration = "3.45 Min"
    let videoName = "Olam Cocoa 2018"
    let player = "Youtube"
    let playerTime = new Date();
    videoTrack(duration, videoName, player, playerTime)
   // $('.cocoa').hide()
});

$(".Our.Corporate.Video").click(function (e) {
    var symbol = $("iframe.youtube-videos")[0].src.indexOf("?") > -1 ? "&" : "?";
    $("iframe.youtube-videos")[0].src += symbol + "autoplay=1";
    let duration = "3.38 Min"
    let videoName = "Our Corporate Video"
    let player = "Youtube"
    let playerTime = new Date();
    videoTrack(duration, videoName, player, playerTime)
    //$('.Our.Corporate.Video').hide()
});
$(".careers").click(function (e) {
   var symbol = $("iframe.youtube-videos.careers")[0].src.indexOf("?") > -1 ? "&" : "?";
    $("iframe.youtube-videos.careers")[0].src += symbol + "autoplay=1";
    let duration = "4.02 Min"
    let videoName = "Future Leaders Programme"
    let player = "Youtube"
    let playerTime = new Date();
    videoTrack(duration, videoName, player, playerTime)
    //$('.careers').hide()
});

$(".coffee").click(function (e) {
    var symbol = $("iframe.youtube-videos")[0].src.indexOf("?") > -1 ? "&" : "?";
    $("iframe.youtube-videos")[0].src += symbol + "autoplay=1";
    let duration = "6.48 Min"
    let videoName = "Olam Coffee - Tackling Cafe Roya in Mexico (English)"
    let player = "Youtube"
    let playerTime = new Date();
    videoTrack(duration, videoName, player, playerTime)
   // $('.coffee').hide()
});
*/


$(document).ready(function() {
    //  To hide footer subscribe banner
    $(".close-btn").click(function() {
        $(".notify-wrapper").hide();
    });
});
/* Subscribe overlay validation - Start */

    $(function() {
        $("#subscribe").validate({
            // Specify validation rules
            rules: {
                firstname: "required",
                lastname: "required",
                country: {
                    required: true,
                },
                industry: {
                    required: true,
                },
                job: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true,
                },
            },
            // Specify validation error messages
            messages: {
                firstname: "First name is required",
                lastname: "Last name is required",
                country: {
                    required: "Select country",
                },
                industry:

                {
                    required: "Select industry",
                },
                job: {
                    required: "Select job position",
                },
                email: {
                    required: "Email is required",
                    email: "Enter Valid Email Address",
                },
            },
            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function(form) {
                // form.submit();
                if ($('#subscribe').valid()) {
                    sendSubscriptionList();
                }

            },
            onkeyup: function(element) {
                if (element.id == 'email') {
                    return false;
                }
            }
        });

		var date = new Date();
	    var timestamp = date.getTime();

	    function getSubcribeList() {
	      var chkArray = [];
	      $(".styled-checkbox:checked").each(function() {
	       chkArray.push($(this).val());
	      });
	      if (chkArray.length > 0) {
	          return chkArray.join();
	      }
	    }
      
      function subscribeResultIterate(responseString, type) {
        var result = "";
          if (responseString != "") {
              //var resultsIteration = responseString.split(",");
              for (var index = 0 ; index < responseString.length; index++) {
                  if (type== "Success") {
                      result += "<div class=\"alert alert-success\"><strong>Success!</strong> "+ responseString[index] +"</div>";
                  } else if (type== "Failure") {
                      result += "<div class=\"alert alert-danger\"><strong>Failure!</strong> "+ responseString[index] +"</div>";
                  }
              }
          }
          return result;
      }
      
      function subscribeResult(response) {
          var result = "";
          if (response.Success !== undefined) {
              result += subscribeResultIterate(response.Success, "Success");
          }
          if (response.Failure !== undefined) {
              result += subscribeResultIterate(response.Failure, "Failure");
          }
          
          var subcribeResponeResult = "<div class=\"panel panel-info js-subscribeResult\"><div class=\"panel-heading\"><b>Thank you for your request. Your subscription request generated the following results;</b></div><div class=\"panel-body\">"+ result +"<button type=\"button\" id=\"btnOK\" class=\"btn btn-primary  pull-right\">OK</button></div></div>";
          
          $("#subscribe").append(subcribeResponeResult);
          
          $("#btnOK").on("click", function() {
              $('#subscribe > .form-group').show();
              $(".js-subscribeResult").remove();
              $("#subscribe").trigger('reset');
              var selectObj = $("select > option[hidden]");
              var selectTextbox = ["Select country", "Select industry", "Select job position"];
              $.each(selectObj, function(index, value) {
                  $(this).text(selectTextbox[index]);
              });
          });
      }

	    function sendSubscriptionList() {
	        var subcriberList = getSubcribeList();
	        $.ajax({
	            url: "/bin/MailChimp",
	            type: "GET",
	            dataType: "json",
	            cache: false,
	            data: {
	                email: $("#email").val(),
	                firstName: $("#firstname").val(),
	                lastName: $("#lastname").val(),
	                country: $("#country option:selected").val(),
	                industry: $("#industry option:selected").val(),
	                jobPosition: $("#job option:selected").val(),
	                subcribe: subcriberList,
	                timestamp: timestamp,
                     g_recaptcha_response: grecaptcha.getResponse()  
	            },
	            beforeSend: function() {
	                
	            },
	            success: function(response) {
                  $(".js-subscribeResult").remove();
                  subscribeResult(response);
                  $('#subscribe > .form-group').hide();
	            }
	        });
	    }



    });

 $(document).ready(function() { 
    // reset form values once the modal is closed
    $('#formSubscribeModal').on('hidden.bs.modal', function() {
        $(this).find('form').trigger('reset');
        $(".error").next('label').remove();
        $(this).find('.error').removeClass('error');
        $(".js-subscribeResult").remove();
        $('#subscribe > .form-group').show();
    });

    $("#subscribe [type='submit']").on('click', function() {
        $("select option[hidden]").text("");
    });

    $('#formSubscribeModal input[type="text"], #formSubscribeModal input[type="email"]').focus(function() {
        $(this).next('label').remove();
    });

    $('input[type="email"]').on('blur', function(e) {
        if ($(this).next().hasClass('error')) {
            $(this).val('');
        }
    });
    
    $('#formSubscribeModal select').on("keydown", function(e) {
        if(e.which==38 || e.which==40) {
			if ($(this).next().hasClass('error')) {
                $(this).next().html('');
            }
        }
    }); 
 });


/* Subscribe overlay validation - End */
/* SVG conversion Start */
/*
 * Replace all SVG images with inline SVG
 */
$(function() {
    $('.products-list img.img-responsive').each(function() {
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');
            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });
});
/* SVG conversion End */
$(function() {
    $('.mobile-menubar-green img.mobile-menu').each(function() {
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');
            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });
});

/* Board of Directors - page */
/* Code for 3 column structure in lg(Portrait and landscape), md(Portrait and landscape) and sm(landscape) devices. 2 column structure in sm(Portrait) and xs devices */
$(document).ready(function() {
	var boardMembers = $('.tile-img-block');

	var boardMembersIndex = 1;
	$.each(boardMembers, function( index, value ) {
	  if (boardMembersIndex % 2 == 0) {
		$(this).parent().after("<div class=\"clearfix visible-sm\"></div>");
	  }
	  if (boardMembersIndex % 3 == 0) {
		$(this).parent().after("<div class=\"clearfix visible-md visible-lg\"></div>");
	  }	  
	  boardMembersIndex++;
	});
});
/* Sustainable Supply Chains - page */
/* Code for 4 column carousel structure in lg(Portrait and landscape), md(Portrait and landscape) and sm(landscape) devices. 
   2 column structure in sm(Portrait) and 1 column structure in xs devices */
$(document).ready(function() {
    // responsive slick carousel
    var multiCarousel = $(".carousel");
    $(".four-tile-slider").not('.slick-initialized').slick({
      adaptiveHeight: true,
      dots: true,
      arrows: false,
      cssEase: "linear",
      speed: 0,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [{
        breakpoint: 1024, // width < 1024
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }, {
        breakpoint: 900, // width < 768
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }, {
        breakpoint: 768, // width < 768
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }, {
        breakpoint: 569, // max-width < 569
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    });

    /* code to adjust slick carousel height and slick dots height */
    function adjustSlickHeight() {
      
      var currentHeight = $(".four-tile-slider .card-wrapper.news-cards").innerHeight();
      currentHeight = currentHeight + 35;
      $('.four-tile-slider').css({"height" : currentHeight+'px'});
      
     var IPAD = 676;
     var $win = $(window);

      if ($win.outerWidth() > IPAD) {
         $('#fourTileSustCarousel .slick-dots').css({"height" : '20px', "margin-bottom": "2px"});
      }
    }
    
    setTimeout(function(){
      adjustSlickHeight();
    }, 2000);

    $(window).on('resize orientationchange', function() {
      $('.four-tile-slider').slick('resize');
      adjustSlickHeight();
    });
});


/* Sustainable Supply Chains - page */
/* Code for 4 column carousel structure in lg(Portrait and landscape), md(Portrait and landscape) and sm(landscape) devices. 
   2 column structure in sm(Portrait) and 1 column structure in xs devices */
$(document).ready(function() {
    // slick carousel
    var multiCarousel = $(".carousel");
    $(".three-tile-slider").not('.slick-initialized').slick({
        adaptiveHeight: true,
        dots: true,
        arrows: false,
        speed: 0,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1024, // width < 1024
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 900, // width < 768
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 768, // width < 768
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 569, // max-width < 569
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    /* 
     *  code to adjust slick carousel height and slick dots height
     */
    function adjustSlickHeight() {
        var IPAD = 676;
        var $win = $(window);
        if ($win.outerWidth() > IPAD) {
            $('#fourTileSustCarousel .slick-dots').css({
                "height": '17px'
            });
            $('.js-kpi-carousel .slick-list').eq(1).css({
                "margin-bottom": "120px"
            });
        }
    }

    setTimeout(function() {
        adjustSlickHeight();
    }, 2000);

    $(window).on('resize orientationchange', function() {
        $('.three-tile-slider').slick('resize');
        adjustSlickHeight();
    });
});
$(document).ready(function() {

    /*
     * This function is used to adjust the carousel's parent container height & bottom space adjustment.
     *
     */
    function adjustParentHeight() {
        var DESKTOP_WIDTH = 1024;
        var $win = $(window);
        // Desktop view height adjustment
        if ($win.outerWidth() >= DESKTOP_WIDTH && $win.outerWidth() > $win.innerHeight()) {
            var titleCarouselObj = $(".js-eventcarousel");
            var parentCardHeight = "";
            var childCardHeight = "";
            $.each(titleCarouselObj, function(key, value) {
                var currentSlickCount = $(this).find(".slick-slide:not(.slick-cloned)").length;

                if (currentSlickCount > 1) {
                    var innerSlickObj = $(this).find(".slick-slide:not(.slick-cloned)");
                    parentCardHeight = $(this).outerHeight();
                    console.log("parentCardHeight : " + parentCardHeight);
                    var heightList = [];

                    // This iteration is used to get the all card height of carousel's
                    $.each(innerSlickObj, function(key, value) {
                        childCardHeight = $(this).find(".card-wrapper").outerHeight();
                        console.log("childCardHeight : " + childCardHeight);
                        if (parentCardHeight <= childCardHeight) {
                            var applyMarginBottom = childCardHeight - parentCardHeight;
                            console.log("applyMarginBottom : " + applyMarginBottom);
                            heightList.push(childCardHeight);
                        }
                    });
                    
                   // To find out the highest card height of carousel.
                    var maxHeight = Math.max.apply(Math, heightList);
                    console.log('Max Heigh : ' + maxHeight);
                    if (!isNaN(maxHeight)) {
						maxHeight = 0;
                    }
                    if (maxHeight > 0) {
                        $(this).find('div.slick-list > div.slick-track').css({
                            "height": maxHeight + 70
                        });
                        $(this).css({
                            "margin-bottom": 80
                        });
                    } else {
                        $(this).css({
                            "margin-bottom": 70
                        });
                    }
                } else {
                    var currentImageHeight = $(this).find(".events-image").outerHeight();
                    var currentCardHeight = $(this).find(".card-wrapper").outerHeight();
                    var cardTopPosition = $(".event-card").position();
                    console.log(cardTopPosition);
                    var currentCardPositionHeight = (currentCardHeight - (cardTopPosition.top * -1));
                    if (currentCardPositionHeight > currentImageHeight ) {
                        $(this).css({
                            "height": currentCardHeight
                        });
                    }
                    else
                    {
						$(this).css({
                            "height": currentImageHeight +(cardTopPosition.top * -1)
                        });
                    }
                }
            });
        } else {  // mobile view height adjustment
            var titleCarouselObj = $(".js-eventcarousel");
            $.each(titleCarouselObj, function(key, value) {
                var currentSlickCount = $(this).find(".slick-slide:not(.slick-cloned)").length;
                if (currentSlickCount > 1) {
                    if ($(this).not('[style]')) {
                        $(this).css({
                            "margin-bottom": 70
                        });
                    }
                }
            });
        }

    }

    setTimeout(function() {
        adjustParentHeight();
    }, 3000);

});
$(document).ready(function() {
	// code to control the height of card when content is more
    function adjustFullWidthImageCardHeight() {
		var fullImageCarouselObj = $(".js-full-width-image-card");
		$.each(fullImageCarouselObj, function(key, value) {
			var currentImageHeight = $(this).find("img.img-responsive").outerHeight();
			var currentCardHeight = $(this).find(".card.spruce-bar").height();
			if (currentCardHeight > currentImageHeight) {
				var cardCarouselHeight = currentCardHeight;
				$(this).css({"height" : cardCarouselHeight});
			}
		});

    } 
    if(window.innerWidth>768) {
    setTimeout(function(){ adjustFullWidthImageCardHeight(); }, 3000);
    }

function adjustFullWidthImageHeight() {

        var ribbon = $(".ribbon");
        var ribbonHeight = $(ribbon).height();
        var leadercard = $(".card").outerHeight();
    	if ($(".card-event").hasClass('full-width-pos-bot-right')  || $(".card-event").hasClass('full-width-pos-bot-left')){ 
        var cardPosition = $(".card-event").position();
        console.log(cardPosition.top);
        var ribbonCardHeight = (ribbonHeight + leadercard) - cardPosition.top;
        }
        $(ribbon).parent().parent().css({"height" : ribbonCardHeight + "px" });

}
adjustFullWidthImageHeight();

});

$(document).ready(function() {
    /*
     * This event is using for accordion collapse & expand
     */
    $(".panel-heading").click(function(){
        var currentBoolean = $(this).next().is(':hidden');
        var accordion = $(".panel-heading");
        // Resetting all accordion to collapse state
        $.each(accordion, function(key, value) {
            $(this).next().hide();
            $(this).find(".accordion-toggle").addClass("collapsed");
        });
        if (currentBoolean) {
            $(this).next().show();
            $(this).find(".accordion-toggle").removeClass("collapsed");
        } else {
            $(this).next().hide();
            $(this).find(".accordion-toggle").addClass("collapsed");
        }
    });

});

/* Mega Menu start */
$(function () {
    //  $(".lightblue").eq(2).css("margin-left", "167%");
    // ajax call to get mega menu json data  
    $.ajax({
        url: "/bin/MegaMenu.json",
        type: "GET",
        dataType: "json",
        //cache: false,
        crossDomain: true,
        beforeSend: function () {

        },
        success: function (response) {
            if (response.navigation !== undefined) {
                var nav = $(".navbar-nav"),
                    html = "";

                //code to append response data from json to html
                $.each(response.navigation, function (idx, obj) {
                    // Top menu and sub-menu's addition
                    if (this.headingArray) {

                        if (window.location.href.indexOf('4502') > 0) {
                            html += '<li class="top-level side-nav-menu"><a class="" href="/content/olamgroup/en/home-page' + obj.path + '">' + obj.title + '</a>';

                            if (obj.title == "Products & Services") {
                                console.log("Product_Page", obj)
                                var ofiArray = [];
                                for (var i = 0; i < 6; i++) {
                                    ofiArray.push(obj.headingArray[i]);
                                }
                                var globalAgriArray = [];
                                for (var i = 6; i < 12; i++) {
                                    globalAgriArray.push(obj.headingArray[i]);
                                }
                                var olamInternationalArray = [];
                                for (var i = 12; i < 21; i++) {
                                    olamInternationalArray.push(obj.headingArray[i]);
                                }
                                console.log("menu1", ofiArray)
                                console.log("menu2", globalAgriArray)
                                console.log("menu3", olamInternationalArray)

                                html += '<div class="bgm normalmenu-bg megamenu product_page_menu"><ul class="mega-menu-align product_page_menu_ul">';


								html += '<div class="product_menu_section">';
                                $.each(ofiArray, function () {
                                    html += '<div class="' + 'product_menu ' + this.level + '"><a class="' + this.color + '" href="/content/olamgroup/en/home-page' + this.path + '">' + this.title + '</a></div>';
                                });
                                html += '</div>';


                                html += '<div class="product_menu_section">';
                                $.each(globalAgriArray, function () {
                                    html += '<div class="' + 'product_menu ' + this.level + '"><a class="' + this.color + '"href="/content/olamgroup/en/home-page' + this.path + '">' + this.title + '</a></div>';
                                });
                                html += '</div>';
                                html += '<div class="product_menu_section">';
                                $.each(olamInternationalArray, function () {
									html += '<div class="' + 'product_menu ' + this.level + '"><a class="' + this.color + '" href="/content/olamgroup/en/home-page' + this.path + '">' + this.title + '</a></div>';
                                });
                                html += '</div>';
                                html += '</ul></div>';

                            }
                            else {
                                if (this.headingArray.length > 0) {
                                    html += '<div class="bgm normalmenu-bg megamenu"><ul class="mega-menu-align">';
                                }
                                $.each(this.headingArray, function () {
                                    html += '<li class="' + this.level + '"><a class="' + this.color + '" href="/content/olamgroup/en/home-page' + this.path + '">' + this.title + '</a></li>';
                                });

                                if (this.headingArray.length > 0) {
                                    html += '</ul></div>';
                                }
                            }
                            html += '</li>';

                        }
                        else {

                            html += '<li class="top-level side-nav-menu"><a class="" href="' + obj.path + '">' + obj.title + '</a>';

                            if (obj.title == "Products & Services") {

                                console.log("Product_Page", obj)
                                var ofiArray = [];
                                for (var i = 0; i < 6; i++) {
                                    ofiArray.push(obj.headingArray[i]);
                                }
                                var globalAgriArray = [];
                                for (var i = 6; i < 12; i++) {
                                    globalAgriArray.push(obj.headingArray[i]);
                                }
                                var olamInternationalArray = [];
                                for (var i = 12; i < 21; i++) {
                                    olamInternationalArray.push(obj.headingArray[i]);
                                } 



                                html += '<div class="bgm normalmenu-bg megamenu product_page_menu"><ul class="mega-menu-align product_page_menu_ul">';


								html += '<div class="product_menu_section">';
                                $.each(ofiArray, function () {
                                    html += '<div class="' + 'product_menu ' + this.level + '"><a class="' + this.color + '" href="/content/olamgroup/en/home-page' + this.path + '">' + this.title + '</a></div>';
                                });
                                html += '</div>';


                                html += '<div class="product_menu_section">';
                                $.each(globalAgriArray, function () {
                                    html += '<div class="' + 'product_menu ' + this.level + '"><a class="' + this.color + '" href="/content/olamgroup/en/home-page' + this.path + '">'  + this.title + '</a></div>';
                                });
                                html += '</div>';
                                html += '<div class="product_menu_section">';
                                $.each(olamInternationalArray, function () {
                                    html += '<div class="' + 'product_menu ' + this.level + '"><a class="' + this.color +'"  href="/content/olamgroup/en/home-page' + this.path + '">' + this.title + '</a></div>';
                                });
                                html += '</div>';
                                html += '</ul></div>';

                            }

                            else {

                                console.log("inside else part of 4502");
                                if (this.headingArray.length > 0) {
                                    html += '<div class="bgm normalmenu-bg megamenu"><ul class="mega-menu-align">';
                                }

                                $.each(this.headingArray, function () {
                                  html += '<li class="' + this.level + '"><a class="' + this.color + '" href="' + this.path + '">' + this.title + '</a></li>';
                                });

                                if (this.headingArray.length > 0) {
                                    html += '</ul></div>';
                                }
                            }
                            html += '</li>';
                        }

                    }

                    else {
                        // Top menu addition
                        html += '<li class="top-level side-nav-menu"><a href="' + obj.path + '">' + obj.title + '</a></li>';
                    }

                });


                nav.html(html);

                // code to format the order of menu items with different color for parent and children menu items
                var flexcount = 0;
                var colHeight = 320;
                var newHeight = 0;
                $('.megamenu').each(function () {
                    // this is inner scope, in reference to the .phrase element
                    listcount = 1;
                    newHeight = 0;
                    var myclass, lastAppendeditem;
                    $(this).find('li').each(function (i, e) {
                        // cache jquery var
                        var current = $(this);
                        currentHeight = current.outerHeight();
                        newHeight += currentHeight;
                        if (current.hasClass("level3") && current.next('li').hasClass("level4")) {
                            current.addClass("temp");
                        }

                        if (i == 0 && !current.hasClass("level4") || newHeight > colHeight || current.hasClass("temp") && lastAppendeditem == "level4") {
                            newHeight = 0;
                            flexcount++;
                            myclass = "flexid_" + flexcount;
                            $(this).parent().append('<li style="display:block; min-width:133px; max-width:170px; float:left; margin-right:30px;"><ul class="flexcolumn inside-menu " id="' + myclass + '"></ul></li>');
                            listcount = 0;
                        }

                        current.appendTo("#" + myclass);

                        lastAppendeditem = current.attr('class');
                        listcount++;
                        //}
                    });

                });



                // Resetting the sub-menu's format
                $('.flexcolumn').each(
                    function () {
                        var nextcolumn = $(this).parent().next()
                            .find('.flexcolumn')
                        if ($(this).children().last().hasClass(
                            'level2')) {
                            $(this).children().last().prependTo(
                                nextcolumn);
                        }
                        // $(this).parent().parent().parent().removeClass('normalmenu-bg').addClass('megamenu-bg');
                    });



                // Resetting the sub-menu's format
                $('.normalmenu-bg').each(
                    function (i) {
                        var columnCount = $(this).find(
                            '.flexcolumn').length;
                        if (columnCount > 1) {
                            $(this).removeClass('normalmenu-bg')
                                .addClass('megamenu-bg');
                        }
                    });


            } else {

            }
        }
    });

    // code to change menu color on mouse enter
    $(document).on("mouseenter", "ul.bgm", function () {
        $(this).prev().addClass("menu-active");
    });

    // code to change menu color to default color on mouse leave
    $(document).on("mouseleave", "ul.bgm", function () {
        $(this).prev().removeClass("menu-active");
    });



});

/* Mega Menu end */

$(document).ready(function () {

    /** Menu Selected - Start **/
    setTimeout(function () {

        if ($("#js-mobilehighlight").val() !== undefined) {
            var pageArray = $("#js-mobilehighlight").val().split("/");
            $(".bgm").each(function () {
                var currentMenu = $(this).prev().text();
                if (currentMenu == pageArray[1]) {
                    $(this).parent().addClass("active-menu");
                    return (false);
                }
            });
        }

    }, 2000);
    /** Menu Selected - End **/


});

function jobAnlayticsWorldwide(jobRole, location, supplyChain) {
    console.log("testjob1");
    if (typeof _satellite != "undefined") {
        if (!digitalData.careers) {
            digitalData["careers"] = {};
            console.log("Job Error", digitalData.careers)
        }
        console.log("Main-test1")
        digitalData.careers.jobRole = jobRole;
        digitalData.careers.location = location;
        digitalData.careers.supplyChain = supplyChain;
        _satellite.track('jobApplication')
    }
}

$(".Worldwide.careers").click(function (e) {
    console.log("Main-test")
    let jobRole = "New Job"
    let location = "Worldwide"
    let supplyChain = "Olam"
    console.log("Job Test", supplyChain + location + jobRole);
    jobAnlayticsWorldwide(jobRole, location, supplyChain)
});

$(".Australia.careers").click(function (e) {
    console.log("Main-test")
    let jobRole = "New Job"
    let location = "Australia"
    let supplyChain = "Olam"
    console.log("Job Test", supplyChain + location + jobRole);
    jobAnlayticsWorldwide(jobRole, location, supplyChain)
});
$(".USA.careers").click(function (e) {
    console.log("Main-test")
    let jobRole = "New Job"
    let location = "USA"
    let supplyChain = "Olam"
    console.log("Job Test", supplyChain + location + jobRole);
    jobAnlayticsWorldwide(jobRole, location, supplyChain)
});
$(".Europe.careers").click(function (e) {
    console.log("Main-test")
    let jobRole = "New Job"
    let location = "Europe"
    let supplyChain = "Olam"
    console.log("Job Test", supplyChain + location + jobRole);
    jobAnlayticsWorldwide(jobRole, location, supplyChain)
});




