$(document).ready(function() {
	$("#menu").click(function() {
		$("nav.nav_closed").toggleClass("nav_open");
	});
	$("nav ul li a").click(function() {
		$("nav.nav_open").removeClass("nav_open");
		});
	});

(function(document) {
	var _bars = [].slice.call(document.querySelectorAll('.bar-inner'));
_bars.map(function(bar, index) {
	setTimeout(function() {
			bar.style.width = bar.dataset.percent;
		}, index * 1000);
	})
})(document);

$(document).ready(function() {
	var btt = $('.back-to-top');
	btt.on('click', function(e) {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		e.preventDefault();
	});
	$(window).on('scroll', function() {
		var self =$(this),
			height = self.height(),
			top = self.scrollTop();

		if (top > height) {
				if (!btt.is(':visible')) {
						btt.show();
				}
		} else {
				btt.hide();
		}
	});
});
