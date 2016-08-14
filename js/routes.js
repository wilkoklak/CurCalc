a_app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "templates/main.htm",
		controller: "mainCtrl"
	})
	.when("/info", {
		templateUrl: "templates/info.htm"
	});
});
