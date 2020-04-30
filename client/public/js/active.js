(($) => {
    'use strict';

    // :: 1.0 Footer Reveal Active Code
    // if ($.fn.footerReveal) {
    //     $('footer').footerReveal({
    //         shadow: true,
    //         shadowOpacity: 0.3,
    //         zIndex: -101
    //     });
    // }

    // :: 2.0 ScrollUp Active Code
    // if ($.fn.scrollUp) {
    //     $.scrollUp({
    //         scrollSpeed: 1500,
    //         scrollText: '<i class="fa fa-angle-up"></i>'
    //     });
    // }
    // var $window = $(window);

    // if ($window.width() > 767) {
    //     new WOW().init();
    // }

    

    // :: 3.0 Sticky Active Code
    // $window.on('scroll', function () {
    //     if ($window.scrollTop() > 48) {
    //         $('.header_area').addClass('sticky slideInDown');
    //     } else {
    //         $('.header_area').removeClass('sticky slideInDown');
    //     }
    // });

    // :: 4.0 Preloader Active code
    window.onload = function () {
        $('#preload').fadeOut('slow', function () {
            $(this).remove();
        });
    };
	
	// function initImage()
	// {
	// 	var images = $('.image_list li');
	// 	var selected = $('.image_selected img');

	// 	images.each(function()
	// 	{
	// 		var image = $(this);
	// 		image.on('click', function()
	// 		{
	// 			var imagePath = new String(image.data('image'));
	// 			selected.attr('src', imagePath);
	// 		});
	// 	});
	// }

})(jQuery);