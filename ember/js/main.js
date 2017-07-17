$(document).ready(function() {
	svg4everybody();

	var prevArrow = '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Next" role="button"><svg width="19" height="36"><use xlink:href="images/sprite.svg#slider-prev"></use></svg></button>',
			nextArrow = '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Prev" role="button"><svg width="19" height="36"><use xlink:href="images/sprite.svg#slider-next"></use></svg></button>';

	var lg = 1520,
			md = 992,
			sm = 768,
			xs = 480

	$(".slider-header-banner").slick({
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		fade: true,
		autoplay: true,
		autoplaySpeed: 1000
	});

	$(".slider-gallery").slick({
		slidesToShow: 4,
		dots: true,

		prevArrow: prevArrow,
		nextArrow: nextArrow,

		responsive: [{
			breakpoint: lg,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: md,
			settings: {
				slidesToShow: 2
			}
		}, {
			breakpoint: sm,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	$(".slider-reviews-pr").slick({
		slidesToShow: 3,
		centerMode: true,
		variableWidth: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		asNavFor: ".slider-reviews-descs",
		responsive: [{
			breakpoint: xs,
			settings: {
				slidesToShow: 1,
				variableWidth: false,
				centerMode: false
			}
		}]
	});

	$(".slider-reviews-descs").slick({
		slidesToShow: 1,
		arrows: false,
		asNavFor: ".slider-reviews-pr"

	});

	$(".field-checkbox").click(function() {
		var $input = $(this).find(".field-checkbox__input")

		if( $input.is(":checked") ) {

			$(this).removeClass("field-checkbox_checked");
			$input.prop("checked", false);

		} else {

			$(this).addClass("field-checkbox_checked");
			$input.prop("checked", true);

		}
	})

	
});