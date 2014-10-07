var $win = $(window);
var $sun = $('.sun');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$sun.css('transform', 'rotate(' + scrollPos + 'deg)');

});
