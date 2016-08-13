var vars = {};
var a_app = angular.module("mainApp", ["ngRoute"]);
a_app.run(function($rootScope) {
	$rootScope.side_nav = false;
	$rootScope.showSideNav = function() {
		$rootScope.side_nav = true;;
	}
	$rootScope.menu_items = [
		{
			icon: "home",
			text: "Strona główna"
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
