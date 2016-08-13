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
		vars.test = "aaa";
		function onBatteryStatus(status) {
			vars.level = status.level;
		}
		window.addEventListener("batterystatus", onBatteryStatus, false);
	}
}
