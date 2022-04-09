$(function(){

	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		isApple = /iPod|iPad|iPhone/i.test(navigator.userAgent),
		$doc = $(document),
		$win = $(window),
		$html = $(document.documentElement);

	$('table').wrap('<div class="table-wrapper"></div>');

	/*alignElements*/
	function blocksMatchHeight(arr) {
		for (var i = 0; i< arr.length; i++) {
			$(arr[i]).matchHeight();
		}
	}
	var alignElemets = function(){
		blocksMatchHeight([
			'.test'
		]);	
	}
	alignElemets();
	/*alignElements*/

	/*orientationChange*/
	window.addEventListener("orientationchange", function() {
		setTimeout(alignElemets, 500);
		log("orientationChange");
	}, false);
	/*orientationChange*/


	// Esc button
    $doc.on('keyup', function(keyUp){
	    if (keyUp.keyCode 
	    	== 27) {

	    	$('.block').removeClass('active');
	      	$html.removeClass('overflowHidden');
	    	
	        return false;
	    };
	});
	// Esc button

	// Document click begin
	$doc.on('click', function(event){
        if ( $(event.target).closest('.wrapper, .ui-datepicker, .ui-datepicker a, .ui-corner-all').length ){}else {
        	$('.block').removeClass('active');
	      	$html.removeClass('overflowHidden');
        };
    });
    // Document click end


});

$(document).ready(function(){


	$('.header-slider').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    items:1,
    navText: ["<img src='img/prev.png'>","<img src='img/next.png'>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        1024:{
            items:1,
            nav:true
        }
    }
	});

var sl = window.matchMedia('all and (max-width:479px)');
	if(sl.matches){
		$('.main-inner__body').addClass('owl-carousel');
		$('.other-wrapper').addClass('owl-carousel');

		$('.main-inner__body').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    items:1,
	});

		$('.other-wrapper').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    items:1,
    navText: ["<img src='img/prev.png'>","<img src='img/next.png'>"],
	});
	}
	else {
		$('.main-inner__body').removeClass('.owl-carousel');
		$('.other-wrapper').removeClass('owl-carousel');

	}

var mql = window.matchMedia('all and (max-width: 767px)');
	if(mql.matches){
	$('.benefit-inner__body').addClass('owl-carousel');
    $('.benefit-inner__body').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    items:1,
    navText: ["<img src='img/prev.png'>","<img src='img/next.png'>"],
	});	
    }
    else {
    	$('.benefit-inner__body').removeClass('owl-carousel');
    }
	$('.comment-slider').owlCarousel({
    loop:false,
    margin:34,
    nav:true,
    items:2,
    navText: ["<img src='img/prev.png'>","<img src='img/next.png'>"],
    responsive:{
        0:{
            items:1,
            margin:0,
            nav:false,
        },
        480:{
        	items:1,
        	nav:true,
        	margin:0,
        },
        1024:{
            items:2,
           	
        }
    }
	});





$('.header-menu').on('click', function(){
	$('.site-bg').addClass('block');
	$('.menu-click').css("transform","translateX(0)");
	$('.close').addClass('show');
	$('.menu-click ul li').has('ul').addClass('haschild');
	$(this).css({"cursor":"default"});
});

$('.site-bg').on('click', function(){
	$(this).removeClass('block');
	$('.menu-click').css("transform","translateX(100%)");
	// $('.menu-click').removeClass('show');
	$('.close').removeClass('show');
	$('.header-menu').css({"cursor":"pointer"});
	$('.modal').css("display","none");
	$('.menu-click ul li').has('ul').removeClass('opened');
});

$('.close').on('click', function(e){
	console.log(event);
	$('.menu-click').css("transform","translateX(100%)");
	// $('.menu-click').removeClass('show');
	$('.site-bg').removeClass('block');
	$(this).removeClass('show');
	$('.header-menu').css({"cursor":"pointer"});
	// $('.menu-click ul li').has('ul').removeClass('haschild');
	$('.menu-click ul li').has('ul').removeClass('opened');
	// $(this).hide();

});
	$('.menu-click ul li').has('ul').addClass('haschild');
$('.menu-click ul li').on('click', function(){
		$(this).has('ul').toggleClass('haschild');
		$(this).has('ul').toggleClass('opened');

});

$('.slider-item__btn a').on('click', function(){
	$('.modal').css("display","block");
	$('.site-bg').addClass('block');
})

$('.modal-close').on('click', function(){
	$('.site-bg').removeClass('block');
	$('.modal').css("display","none");
});

$('.up').on('click', function(){
	$('body,html').animate({
		scrollTop:0}, 1500);
		return false;
});
$('.white li a').mouseover(function(){

$(this).children('img.svg-changeable').each(function () {
    var $e = $(this);
    var imgURL = $e.prop('src');
    $.get(imgURL, function (data) {
      var $svg = $(data).find('svg');
      $svg.find('.cls-1').css('fill', '#ec3d73');
      $svg.find('.cls-2').css('fill', '#ec3d73');
      $svg.find('.cls-3').css('fill', '#ec3d73');
      $svg.find('.cls-4').css('fill', '#ec3d73');
      $svg.find('.cls-5').css('fill', '#ec3d73');
      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
    });
  });

});
$('.white li a').mouseout(function(){

$(this).children('img.svg-changeable').each(function () {
    var $e = $(this);
    var imgURL = $e.prop('src');
    $.get(imgURL, function (data) {
      var $svg = $(data).find('svg');
      $svg.find('.cls-1').css('fill', '#fff');
      $svg.find('.cls-2').css('fill', '#fff');
      $svg.find('.cls-3').css('fill', '#fff');
      $svg.find('.cls-4').css('fill', '#fff');
      $svg.find('.cls-5').css('fill', '#fff');
      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
    });
  });

});


$('.header-menu').mouseover(function(){

$(this).children('img.svg-changeable').each(function () {
    var $e = $(this);
    var imgURL = $e.prop('src');
    $.get(imgURL, function (data) {
      var $svg = $(data).find('svg');
      $svg.find('.cls-1').css('fill', '#ec3d73');
      $svg.find('.cls-2').css('fill', '#ec3d73');
      $svg.find('.cls-3').css('fill', '#ec3d73');
      $svg.find('.cls-4').css('fill', '#ec3d73');
      $svg.find('.cls-5').css('fill', '#ec3d73');
      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
    });
  });

});
$('.header-menu').mouseout(function(){

$(this).children('img.svg-changeable').each(function () {
    var $e = $(this);
    var imgURL = $e.prop('src');
    $.get(imgURL, function (data) {
      var $svg = $(data).find('svg');
      $svg.find('.cls-1').css('fill', '#000');
      $svg.find('.cls-2').css('fill', '#000');
      $svg.find('.cls-3').css('fill', '#000');
      $svg.find('.cls-4').css('fill', '#000');
      $svg.find('.cls-5').css('fill', '#000');
      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
    });
  });

});



// var limit = $(window).height() / 3,
//         $backToTop = $('.up');

//     $(window).scroll(function() {
//         if ($(this).scrollTop() > limit) {
//             $backToTop.fadeIn();
//         } else {
//             $backToTop.fadeOut();
//         }
//     });
//     // scroll body to 0px on click
//     $backToTop.click(function() {
//         $('body,html').animate({
//             scrollTop: 0
//         }, 1500);
//         return false;
//     });

// $(document).mouseup(function (e){ // событие клика по веб-документу
// 		var div = $(".header-menu, .menu-click"); // тут указываем ID элемента
// 		if (!div.is(e.target) // если клик был не по нашему блоку
// 		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
// 			div.removeClass('show'); // скрываем его
// 		$('.site-bg').removeClass('block');
// 		$('body').removeClass('show');
// 		}
// 	});

});