a_app.controller("mainCtrl", function($rootScope, $scope, $route, $http) {
	$scope.waluty;
	$http.get("http://api.nbp.pl/api/exchangerates/tables/A?format=json")
	.then(function(response) {
		$scope.waluty = response.data;
	});
});
