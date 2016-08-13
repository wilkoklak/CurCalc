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
		window.addEventListener("batterystatus", onBatteryStatus, false);
		function onBatteryStatus(status) {
			alert(status.level);
		}
	}
}
