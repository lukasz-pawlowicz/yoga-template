$(document).ready(function() {
var panel = $(".panel");
var buttonPrice = $(".button-price");
panel.on("mouseenter", function() { 
	$(this).find("h4").addClass("panel-hover-h4");
	$(this).find(".button-price").addClass("panel-hover-button");
});
panel.on("mouseleave", function() { 
	$(this).find("h4").removeClass("panel-hover-h4");
	$(this).find(".button-price").removeClass("panel-hover-button");
});

$(window).on("scroll", function() {
	if ($(document).scrollTop() > $(".navbar").position().top) {
		$(".navbar").addClass("sticky");
		//$("body").css("padding-top", "10px")
	}
	else {
		$(".navbar").removeClass("sticky");
	}
});


});