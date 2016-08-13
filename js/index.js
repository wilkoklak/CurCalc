var vars = {};
var a_app = angular.module("mainApp", ["ngRoute"]);
var app = {
	init: function() {
		this.bindEvents();
		console.log("ciomka");
	},
	bindEvents: function() {
		document.addEventListener("deviceready", this.onDeviceReady(), false);
	},
	onDeviceReady: function() {
		a_app.test = "aaa";
		function onSuccess(position) {
			vars.coords = position.coords;
			vars.timestamp = position.timestamp;
		}
		function onError(err) {
			vars.error = err.message;
		}
		var watch = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
	},
	onSuccess: function(position) {
		vars.coords = position.coords;
		vars.timestamp = position.timestamp;
	},
	onError: function(err) {
		vars.error = err.message;
	}
}
