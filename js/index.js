var vars = {};
var a_app = angular.module("mainApp", ["ngRoute", "ngAnimate"]);
a_app.run(function($rootScope) {
	$rootScope.side_nav = false;
	$rootScope.showSideNav = function() {
		var dark = document.querySelector(".dark");
		var menu = document.querySelector(".side-nav");
		if($rootScope.side_nav == false) {
			menu.style.transform = "translateX(0)";
			dark.style.animationName = "darken";
			$rootScope.side_nav = true;
		} else {
			menu.style.transform = "translateX(-110%)";
			dark.style.animationName = "lighten";
			$rootScope.side_nav = false;
		}
	}
	$rootScope.menu_items = [
		{
			icon: "home",
			text: "Strona główna",
			href: "#/"
		},
		{
			icon: "info",
			text: "Info",
			href: "#/info"
		}
	]
})
var app = {
	init: function() {
		this.bindEvents();
	},
	bindEvents: function() {
		document.addEventListener("deviceready", this.onDeviceReady, false);
	},
	onDeviceReady: function() {

	}
}
