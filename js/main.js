var $win = $(window);
var $sun = $('.sun');
var $sunSection = $('.sun-section');
var $dipperSection = $('.dipper-section');
var $dipper = $('.dipper');
var $shuttle = $('.shuttle')
var $shuttleSection = $('.shuttle-section')


$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$sun.css('transform', 'rotate(' + scrollPos / 2 + 'deg)');
	$sunSection.css('background-position', 'center ' + scrollPos / 3 + 'px');
});


$dipperSection.waypoint(function () {
	$dipper.addClass('js-dipper-fade');
}, { offset: '50%' });

$shuttleSection.waypoint(function () {
	$shuttle.addClass('js-shuttle-fade');
}, { offset: '50%' });