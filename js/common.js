$(document).ready(function() {


	/*input file*/
	$("input[type='file']").change(function(){
		var filename_text = $(this).parent().siblings(".name-upload");
		var filename = $(this).val().replace(/.*\\/, "");
		filename_text.html(filename);
	});

	$(".item-question__head").click(function() {
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
		$(this).parent().siblings(".item-question").removeClass("active");
		$(this).parent().siblings(".item-question").find(".item-question__content").slideUp(200);
	});

//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}

});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
	$menu.removeClass("default").addClass("fixed");
} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
	$menu.removeClass("fixed").addClass("default");
}

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	 $(document).mouseup(function (e){ 
    var div = $(".menu-dropdown"); 
    if (!div.is(e.target) 
      && div.has(e.target).length === 0) { 
    $(".menu-dropdown").slideUp(200);
		$(".sandwich").removeClass("active"); 
 }
});
	//кнопка sandwich
	$(".btn_nav").click(function() {
		
		if ($(".menu-dropdown").is(":hidden")) {
			$(".menu-dropdown").slideDown(200);
			$(".sandwich").addClass("active");
		} else {
			$(".menu-dropdown").slideUp(200);
			$(".sandwich").removeClass("active");
		}
		
	});

	$(".menu-dropdown a").click(function() {
		$(".menu-dropdown").slideUp(200);
		$(".sandwich").removeClass("active");
	});

	



	//слайдер

	$('.slider-portfolio').slick({
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.20204e-06 27.5005C5.38182e-07 12.3132 12.3124 0.000976024 27.4997 0.00097536C42.6865 0.000974697 55 12.313 55 27.5001C55 42.6873 42.6865 55.0006 27.4997 55.0006C12.3124 55.0006 1.86591e-06 42.6881 1.20204e-06 27.5005ZM34.7952 39.9093C35.7975 38.9065 35.798 37.2807 34.7952 36.2775L25.9458 27.4299L34.8403 18.5343C35.8426 17.5321 35.8431 15.9057 34.8403 14.9025C34.3382 14.4018 33.6815 14.1512 33.0244 14.1512C32.3674 14.1512 31.7107 14.4018 31.21 14.9034L20.889 25.2235C20.7353 25.3224 20.5889 25.4357 20.4548 25.5697C19.9423 26.0823 19.6955 26.7569 19.7074 27.4297C19.696 28.1011 19.9423 28.7769 20.4554 29.2889C20.589 29.4235 20.7355 29.5362 20.889 29.6347L31.1634 39.9091C32.1662 40.9116 33.792 40.9123 34.7952 39.9093Z" fill="#C4C4C4"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M55 27.5005C55 12.3132 42.6876 0.000976024 27.5003 0.00097536C12.3135 0.000974697 -5.38174e-07 12.313 -1.20203e-06 27.5001C-1.86588e-06 42.6873 12.3135 55.0006 27.5003 55.0006C42.6876 55.0006 55 42.6881 55 27.5005ZM20.2048 39.9093C19.2025 38.9065 19.202 37.2807 20.2048 36.2775L29.0542 27.4299L20.1597 18.5343C19.1574 17.5321 19.1569 15.9057 20.1597 14.9025C20.6618 14.4018 21.3185 14.1512 21.9756 14.1512C22.6326 14.1512 23.2893 14.4018 23.79 14.9034L34.111 25.2235C34.2647 25.3224 34.4111 25.4357 34.5452 25.5697C35.0577 26.0823 35.3045 26.7569 35.2926 27.4297C35.304 28.1011 35.0577 28.7769 34.5446 29.2889C34.411 29.4235 34.2645 29.5362 34.111 29.6347L23.8366 39.9091C22.8338 40.9116 21.208 40.9123 20.2048 39.9093Z" fill="#C4C4C4"/></g><defs><clipPath id="clip0"><rect width="55" height="55" fill="white" transform="translate(55) rotate(90)"/></clipPath></defs></svg><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				adaptiveHeight: true,
			}
		}
		]
	});



	$('.slider-portfolio .portfolio-for').each(function(){
		var $this = $(this),
		$this_siblings = $(this).siblings(".slider-portfolio .portfolio-nav");
		$this.slick({
			arrows: false,
			dots: false,
					swipe: false,
			infinite: true,
			asNavFor: $this_siblings,
			slidesToShow: 1,
			touchThreshold: 1000,
			slidesToScroll: 1
		});
	});

	$('.slider-portfolio .portfolio-nav').each(function(){
		var $this = $(this),
		$this_siblings = $(this).siblings(".slider-portfolio .portfolio-for");
		$this.slick({
			arrows: false,
			dots: false,
			infinite: true,
					swipe: false,
			focusOnSelect: true,
			asNavFor: $this_siblings,
			touchThreshold: 1000,
			slidesToShow: 6,
			slidesToScroll: 1
		});
	});

	$('.project-wrap .portfolio-for').each(function(){
		var $this = $(this),
		$this_siblings = $(this).siblings(".project-wrap .portfolio-nav");
		$this.slick({
			arrows: false,
			dots: false,
			infinite: true,
			asNavFor: $this_siblings,
			slidesToShow: 1,
			touchThreshold: 1000,
			slidesToScroll: 1
		});
	});

	$('.project-wrap .portfolio-nav').each(function(){
		var $this = $(this),
		$this_siblings = $(this).siblings(".project-wrap .portfolio-for");
		$this.slick({
			arrows: false,
			dots: false,
			infinite: true,
			focusOnSelect: true,
			asNavFor: $this_siblings,
			touchThreshold: 1000,
			slidesToShow: 6,
			slidesToScroll: 1
		});
	});


	$('.slider-reviews').slick({
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 3,
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.20204e-06 27.5005C5.38182e-07 12.3132 12.3124 0.000976024 27.4997 0.00097536C42.6865 0.000974697 55 12.313 55 27.5001C55 42.6873 42.6865 55.0006 27.4997 55.0006C12.3124 55.0006 1.86591e-06 42.6881 1.20204e-06 27.5005ZM34.7952 39.9093C35.7975 38.9065 35.798 37.2807 34.7952 36.2775L25.9458 27.4299L34.8403 18.5343C35.8426 17.5321 35.8431 15.9057 34.8403 14.9025C34.3382 14.4018 33.6815 14.1512 33.0244 14.1512C32.3674 14.1512 31.7107 14.4018 31.21 14.9034L20.889 25.2235C20.7353 25.3224 20.5889 25.4357 20.4548 25.5697C19.9423 26.0823 19.6955 26.7569 19.7074 27.4297C19.696 28.1011 19.9423 28.7769 20.4554 29.2889C20.589 29.4235 20.7355 29.5362 20.889 29.6347L31.1634 39.9091C32.1662 40.9116 33.792 40.9123 34.7952 39.9093Z" fill="#C4C4C4"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M55 27.5005C55 12.3132 42.6876 0.000976024 27.5003 0.00097536C12.3135 0.000974697 -5.38174e-07 12.313 -1.20203e-06 27.5001C-1.86588e-06 42.6873 12.3135 55.0006 27.5003 55.0006C42.6876 55.0006 55 42.6881 55 27.5005ZM20.2048 39.9093C19.2025 38.9065 19.202 37.2807 20.2048 36.2775L29.0542 27.4299L20.1597 18.5343C19.1574 17.5321 19.1569 15.9057 20.1597 14.9025C20.6618 14.4018 21.3185 14.1512 21.9756 14.1512C22.6326 14.1512 23.2893 14.4018 23.79 14.9034L34.111 25.2235C34.2647 25.3224 34.4111 25.4357 34.5452 25.5697C35.0577 26.0823 35.3045 26.7569 35.2926 27.4297C35.304 28.1011 35.0577 28.7769 34.5446 29.2889C34.411 29.4235 34.2645 29.5362 34.111 29.6347L23.8366 39.9091C22.8338 40.9116 21.208 40.9123 20.2048 39.9093Z" fill="#C4C4C4"/></g><defs><clipPath id="clip0"><rect width="55" height="55" fill="white" transform="translate(55) rotate(90)"/></clipPath></defs></svg><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});
	
	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

