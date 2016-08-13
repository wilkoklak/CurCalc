var vars = {};
var a_app = angular.module("mainApp", ["ngRoute"]);
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
		var watch = navigator.geolocation.watchPosition(this.onSuccess, this.onError);
	},
	onSuccess: function(position) {
		vars.coords = position.coords;
		vars.timestamp = position.timestamp;
	},
	onError: function(err) {
		vars.error = err.message;
	}
}
