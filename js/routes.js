a_app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "templates/main.htm",
		controller: "mainCtrl"
	})
	.when("/side_nav", {
		templateUrl: "templates/side_nav.htm"
	});
});
