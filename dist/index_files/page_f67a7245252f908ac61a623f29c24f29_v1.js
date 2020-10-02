
; /* Start:"a:4:{s:4:"full";s:92:"/local/templates/medscan_new/components/bitrix/news.list/slider_main/script.js?1601119736152";s:6:"source";s:78:"/local/templates/medscan_new/components/bitrix/news.list/slider_main/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var mySwiper = new Swiper('.swiper-container', {
	loop: false,
	autoHeight: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:93:"/local/templates/medscan_new/components/bitrix/news.list/clinics_main/script.js?1601527654408";s:6:"source";s:79:"/local/templates/medscan_new/components/bitrix/news.list/clinics_main/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
jQuery(function($){
	var $toggle = $(".map-toggle");
	
	$(document).on("click", ".map-toggle", function(e){
		e.preventDefault();
		
		let $trg = $(e.currentTarget), $src = $($trg.data("src"));
		
		$toggle.addClass("active");
		$trg.removeClass("active");
		
		if ($src.is(":visible")){
			$src.slideUp(500);
		} else {
			$(".toggle-item").hide();
			$src.slideDown(500);
		}
		
		return false;
	});
	
});

/* End */
;; /* /local/templates/medscan_new/components/bitrix/news.list/slider_main/script.js?1601119736152*/
; /* /local/templates/medscan_new/components/bitrix/news.list/clinics_main/script.js?1601527654408*/
