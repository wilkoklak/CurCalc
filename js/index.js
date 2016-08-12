var vars = {};
var a_app = angular.module("mainApp", ["ngRoute"]);
a_app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "templates/main.htm",
		controller: "mainCtrl"
	});
});
a_app.controller("mainCtrl", function($scope) {
	$scope.test = vars.test;
})
var app = {
	init: function() {
		this.bindEvents();
	},
	bindEvents: function() {
		document.addEventListener("deviceready", this.onDeviceReady, false);
	},
	onDeviceReady: function() {
		vars.test = "aaa";
	}
}
