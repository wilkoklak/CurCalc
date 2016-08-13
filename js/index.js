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
	$scope.test = a_app.test;
})
var app = {
	init: function() {
		this.bindEvents();
		console.log("ciomka");
	},
	bindEvents: function() {
		document.addEventListener("deviceready", this.onDeviceReady, false);
	},
	onDeviceReady: function() {
		a_app.test = "aaa";
	}
}
