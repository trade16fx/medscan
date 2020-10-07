jQuery(document).ready(function($) {

	$('.js-collapse-btn').click(function(event) {		
		$(this).parent().prev('.js-collapse').slideToggle();	
		$(this).toggleClass('active');
	});

	$('.faq-card__title').click(function(event) {
		$(this).toggleClass('active');
		$(this).parents('.faq-card').children('.faq-card__body').slideToggle();	
	});
	$('.readmore-hidden__btn').click(function(event) {		
		$(this).parent().parent().children('.readmore-hidden').slideToggle();
		$(this).toggleClass('active');
		
	});
	$('.js-menuToggle').click(function(event) {
		$(this).toggleClass('active');
		$('.ancorMenu').parent().slideToggle();
	});

	var $page = $('html, body');
	$('.ancorMenu a').click(function() {
    $('.ancorMenu a').parent('li').removeClass('active');
    $(this).parent('li').addClass('active');
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top -100
    }, 800);
    return false;
  });

	if ($('.section-ancorMenu').length){		
		let mnutop = $('.section-ancorMenu').offset().top - 55;	

		$(window).scroll(function() {
	  	scr_w = screen.width;
	  	if (scr_w > 991) {
	      if ($(window).scrollTop() > mnutop) {
	         $('.section-ancorMenu').addClass('fixed');                
	      }
	      else {
	        $('.section-ancorMenu').removeClass('fixed');          
	      }      
	     }
	   });
	}

	if ($('.advantages-slider').length){
    var advSwiper = undefined;
    allInitSwiper('.advantages-slider', advSwiper, 767); 
  } 
	if ($('.special-slider').length){
    var sptSwiper = undefined;
    allInitSwiper('.special-slider',sptSwiper ,767); 
  } 
	if ($('.equipment-slider').length){
    var equSwiper = undefined;
    allInitSwiper('.equipment-slider', equSwiper,767);
  } 
	if ($('.photo-slider').length){
    var phtSwiper = undefined;
    allInitSwiper('.photo-slider', phtSwiper,767); 
  }
	if ($('.medInfo-slider').length){
    var mifSwiper = undefined;
    allInitSwiper('.medInfo-slider', mifSwiper ,767); 
  }
  if ($('.medInfo-slider2').length){
    var mif2Swiper = undefined;
    allInitSwiper('.medInfo-slider2', mif2Swiper ,767); 
  }
	if ($('.steps-slider').length){
    var stpSwiper = undefined;
    allInitSwiper('.steps-slider', stpSwiper ,767); 
  }


  // function advInitSwiper(objSlider, intWidth) {

  //   var screenWidth = $(window).outerWidth();
  //   var objNext = objSlider + ' .slider-arrow_next';
  //   var objPrev = objSlider + ' .slider-arrow_prev';

  //   if ( (screenWidth <= (intWidth)) && (advSwiper == undefined)) {
  //     advSwiper = new Swiper(objSlider, {
  //       slidesPerView: 1,
  //       // loop: true,    
  //       // centeredSlides: true,
  //       autoHeight: true,
  //       spaceBetween: 15,
  //       pagination: {
  //         el: '.advantages-slider__pagination',
  //         clickable: true,
  //         // dynamicBullets: true,
  //         renderBullet: function (index, className) {
  //         	return '<span class="' + className + '"><span>' + (index + 1) + '</span></span>';
  //       	},
  //       },
  //       navigation: {
	 //       nextEl: '.advantages-slider__arrow_next',
	 //       prevEl: '.advantages-slider__arrow_prev',
	 //     },
  //     });
  //   } else if ((screenWidth > intWidth) && (advSwiper != undefined)) {
  //     advSwiper.destroy();
  //     advSwiper = undefined;
  //     $(objSlider + ' .swiper-wrapper').removeAttr('style');
  //     $(objSlider + ' .swiper-slide').removeAttr('style');
  //   }
  // }

  // function sptInitSwiper(objSlider, intWidth) {

  //   var screenWidth = $(window).outerWidth();
  //   var objNext = objSlider + ' .slider-arrow_next';
  //   var objPrev = objSlider + ' .slider-arrow_prev';

  //   if ( (screenWidth <= (intWidth)) && (sptSwiper == undefined)) {
  //     sptSwiper = new Swiper(objSlider, {
  //       slidesPerView: 1,
  //       // loop: true,    
  //       // centeredSlides: true,
  //       autoHeight: true,
  //       spaceBetween: 15,
  //       pagination: {
  //         el: '.special-slider__pagination',
  //         clickable: true,
  //         // dynamicBullets: true,
  //         renderBullet: function (index, className) {
  //         	return '<span class="' + className + '"><span>' + (index + 1) + '</span></span>';
  //       	},
  //       },
  //       navigation: {
	 //       nextEl: '.special-slider__arrow_next',
	 //       prevEl: '.special-slider__arrow_prev',
	 //     },
  //     });
  //   } else if ((screenWidth > intWidth) && (sptSwiper != undefined)) {
  //     sptSwiper.destroy();
  //     sptSwiper = undefined;
  //     $(objSlider + ' .swiper-wrapper').removeAttr('style');
  //     $(objSlider + ' .swiper-slide').removeAttr('style');
  //   }
  // }


  // function equInitSwiper(objSlider, intWidth) {

  //   var screenWidth = $(window).outerWidth();
  //   var objNext = objSlider + ' .slider-arrow_next';
  //   var objPrev = objSlider + ' .slider-arrow_prev';

  //   if ( (screenWidth <= (intWidth)) && (equSwiper == undefined)) {
  //     equSwiper = new Swiper(objSlider, {
  //       slidesPerView: 1,
  //       // loop: true,    
  //       // centeredSlides: true,
  //       autoHeight: true,
  //       spaceBetween: 15,
  //       pagination: {
  //         el: '.equipment-slider__pagination',
  //         clickable: true,
  //         // dynamicBullets: true,
  //         renderBullet: function (index, className) {
  //         	return '<span class="' + className + '"><span>' + (index + 1) + '</span></span>';
  //       	},
  //       },
  //       navigation: {
	 //       nextEl: '.equipment-slider__arrow_next',
	 //       prevEl: '.equipment-slider__arrow_prev',
	 //     },
  //     });
  //   } else if ((screenWidth > intWidth) && (equSwiper != undefined)) {
  //     equSwiper.destroy();
  //     equSwiper = undefined;
  //     $(objSlider + ' .swiper-wrapper').removeAttr('style');
  //     $(objSlider + ' .swiper-slide').removeAttr('style');
  //   }
  // }

  // function phtInitSwiper(objSlider, intWidth) {

  //   var screenWidth = $(window).outerWidth();
  //   var objNext = objSlider + ' .slider-arrow_next';
  //   var objPrev = objSlider + ' .slider-arrow_prev';

  //   if ( (screenWidth <= (intWidth)) && (phtSwiper == undefined)) {
  //     phtSwiper = new Swiper(objSlider, {
  //       slidesPerView: 1,
  //       // loop: true,    
  //       // centeredSlides: true,
  //       autoHeight: true,
  //       spaceBetween: 15,
  //       pagination: {
  //         el: '.photo-slider__pagination',
  //         clickable: true,
  //         // dynamicBullets: true,
  //         renderBullet: function (index, className) {
  //         	return '<span class="' + className + '"><span>' + (index + 1) + '</span></span>';
  //       	},
  //       },
  //       navigation: {
	 //       nextEl: '.photo-slider__arrow_next',
	 //       prevEl: '.photo-slider__arrow_prev',
	 //     },
  //     });
  //   } else if ((screenWidth > intWidth) && (phtSwiper != undefined)) {
  //     phtSwiper.destroy();
  //     phtSwiper = undefined;
  //     $(objSlider + ' .swiper-wrapper').removeAttr('style');
  //     $(objSlider + ' .swiper-slide').removeAttr('style');
  //   }
  // }

  function allInitSwiper(objSlider,  varSwiper,  intWidth) {

    var screenWidth = $(window).outerWidth();
    var objNext = objSlider + '__arrow_next';
    var objPrev = objSlider + '__arrow_prev';
    var objPagination = objSlider + '__pagination';

    console.info(objNext);

    if ( (screenWidth <= (intWidth)) && (varSwiper == undefined)) {
      varSwiper = new Swiper(objSlider, {
        slidesPerView: 1,
        // loop: true,    
        // centeredSlides: true,
        autoHeight: true,
        spaceBetween: 15,
        pagination: {
          el: objPagination,
          clickable: true,
          // dynamicBullets: true,
          renderBullet: function (index, className) {
          	return '<span class="' + className + '"><span>' + (index + 1) + '</span></span>';
        	},
        },
        navigation: {
	       nextEl: objNext,
	       prevEl: objPrev,
	     },
      });
    } else if ((screenWidth > intWidth) && (varSwiper != undefined)) {
      varSwiper.destroy();
      varSwiper = undefined;
      $(objSlider + ' .swiper-wrapper').removeAttr('style');
      $(objSlider + ' .swiper-slide').removeAttr('style');
    }
  }
  

  $(window).resize(function() {
    if ($('.advantages-slider').length) allInitSwiper('.advantages-slider', advSwiper,767);
    if ($('.special-slider').length) allInitSwiper('.special-slider', sptSwiper,767);
    if ($('.equipment-slider').length) allInitSwiper('.equipment-slider', equSwiper, 767);
    if ($('.photo-slider').length) allInitSwiper('.photo-slider', phtSwiper, 767);
    if ($('.medInfo-slider').length) allInitSwiper('.medInfo-slider', mifSwiper, 767);
    if ($('.medInfo-slider2').length) allInitSwiper('.medInfo-slider2', mif2Swiper, 767);
    if ($('.steps-slider').length) allInitSwiper('.steps-slider', stpSwiper, 767);
  });




});

// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.657895, 37.523357],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'NiceEvent',
            balloonContent: 'г. Москва, ул. Валовая, д.14, стр.8'
        }, {

            iconColor: '#f2443c'
            // preset: 'islands#dotIcon'
            // // Опции.
            // // Необходимо указать данный тип макета.
            // iconLayout: 'default#image',
            // // Своё изображение иконки метки.
            // iconImageHref: 'images/baloon.png',
            // // Размеры метки.
            // iconImageSize: [70, 70],
            // // Смещение левого верхнего угла иконки относительно
            // // её "ножки" (точки привязки).
            // iconImageOffset: [-5, -38]
        }

        );

        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects.add(myPlacemark);
    }



