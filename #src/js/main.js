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
		$(this).parents('.clients-front-text').children('.readmore-hidden').slideToggle();
		
	});

	if ($('.js-advantages-slider').length){
    var advSwiper = undefined;
    advInitSwiper('.js-advantages-slider',767);  

    var sptSwiper = undefined;
    sptInitSwiper('.js-special-slider',767);  

    var equSwiper = undefined;
    equInitSwiper('.js-equipment-slider',767); 

    var phtSwiper = undefined;
    phtInitSwiper('.js-photo-slider',767); 
  }

  function advInitSwiper(objSlider, intWidth) {

    var screenWidth = $(window).outerWidth();
    var objNext = objSlider + ' .slider-arrow_next';
    var objPrev = objSlider + ' .slider-arrow_prev';

    if ( (screenWidth <= (intWidth)) && (advSwiper == undefined)) {
      advSwiper = new Swiper(objSlider, {
        slidesPerView: 1,
        // loop: true,    
        // centeredSlides: true,
        autoHeight: true,
        spaceBetween: 15,
        pagination: {
          el: '.advantages-slider__pagination',
          clickable: true,
          // dynamicBullets: true,
          renderBullet: function (index, className) {
          	return '<span class="' + className + '"><span>' + (index + 1) + '</span></span>';
        	},
        },
        navigation: {
	       nextEl: '.advantages-slider__arrow_next',
	       prevEl: '.advantages-slider__arrow_prev',
	     },
      });
    } else if ((screenWidth > intWidth) && (advSwiper != undefined)) {
      advSwiper.destroy();
      advSwiper = undefined;
      $(objSlider + ' .swiper-wrapper').removeAttr('style');
      $(objSlider + ' .swiper-slide').removeAttr('style');
    }
  }

  function sptInitSwiper(objSlider, intWidth) {

    var screenWidth = $(window).outerWidth();
    var objNext = objSlider + ' .slider-arrow_next';
    var objPrev = objSlider + ' .slider-arrow_prev';

    if ( (screenWidth <= (intWidth)) && (sptSwiper == undefined)) {
      sptSwiper = new Swiper(objSlider, {
        slidesPerView: 1,
        // loop: true,    
        // centeredSlides: true,
        autoHeight: true,
        spaceBetween: 15,
        pagination: {
          el: '.special-slider__pagination',
          clickable: true,
          // dynamicBullets: true,
          renderBullet: function (index, className) {
          	return '<span class="' + className + '"><span>' + (index + 1) + '</span></span>';
        	},
        },
        navigation: {
	       nextEl: '.special-slider__arrow_next',
	       prevEl: '.special-slider__arrow_prev',
	     },
      });
    } else if ((screenWidth > intWidth) && (sptSwiper != undefined)) {
      sptSwiper.destroy();
      sptSwiper = undefined;
      $(objSlider + ' .swiper-wrapper').removeAttr('style');
      $(objSlider + ' .swiper-slide').removeAttr('style');
    }
  }


  function equInitSwiper(objSlider, intWidth) {

    var screenWidth = $(window).outerWidth();
    var objNext = objSlider + ' .slider-arrow_next';
    var objPrev = objSlider + ' .slider-arrow_prev';

    if ( (screenWidth <= (intWidth)) && (equSwiper == undefined)) {
      equSwiper = new Swiper(objSlider, {
        slidesPerView: 1,
        // loop: true,    
        // centeredSlides: true,
        autoHeight: true,
        spaceBetween: 15,
        pagination: {
          el: '.equipment-slider__pagination',
          clickable: true,
          // dynamicBullets: true,
          renderBullet: function (index, className) {
          	return '<span class="' + className + '"><span>' + (index + 1) + '</span></span>';
        	},
        },
        navigation: {
	       nextEl: '.equipment-slider__arrow_next',
	       prevEl: '.equipment-slider__arrow_prev',
	     },
      });
    } else if ((screenWidth > intWidth) && (equSwiper != undefined)) {
      equSwiper.destroy();
      equSwiper = undefined;
      $(objSlider + ' .swiper-wrapper').removeAttr('style');
      $(objSlider + ' .swiper-slide').removeAttr('style');
    }
  }

  function phtInitSwiper(objSlider, intWidth) {

    var screenWidth = $(window).outerWidth();
    var objNext = objSlider + ' .slider-arrow_next';
    var objPrev = objSlider + ' .slider-arrow_prev';

    if ( (screenWidth <= (intWidth)) && (phtSwiper == undefined)) {
      phtSwiper = new Swiper(objSlider, {
        slidesPerView: 1,
        // loop: true,    
        // centeredSlides: true,
        autoHeight: true,
        spaceBetween: 15,
        pagination: {
          el: '.photo-slider__pagination',
          clickable: true,
          // dynamicBullets: true,
          renderBullet: function (index, className) {
          	return '<span class="' + className + '"><span>' + (index + 1) + '</span></span>';
        	},
        },
        navigation: {
	       nextEl: '.photo-slider__arrow_next',
	       prevEl: '.photo-slider__arrow_prev',
	     },
      });
    } else if ((screenWidth > intWidth) && (phtSwiper != undefined)) {
      phtSwiper.destroy();
      phtSwiper = undefined;
      $(objSlider + ' .swiper-wrapper').removeAttr('style');
      $(objSlider + ' .swiper-slide').removeAttr('style');
    }
  }
  

  $(window).resize(function() {
    if ($('.js-advantages-slider').length) advInitSwiper('.js-advantages-slider',767);
    if ($('.js-special-slider').length) sptInitSwiper('.js-special-slider',767);
    if ($('.js-equipment-slider').length) equInitSwiper('.js-equipment-slider',767);
    if ($('.js-photo-slider').length) phtInitSwiper('.js-photo-slider',767);
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



