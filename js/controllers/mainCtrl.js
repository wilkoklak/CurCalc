a_app.controller("mainCtrl", function($rootScope, $scope, $route, $http) {
	$scope.waluty;
	$scope.up_to_date = false;
	function lsTest() {
		var test = "test";
		try {
			window.localStorage.setItem(test, test);
			window.localStorage.removeItem(test);
			$scope.wsSupported = true;
			return window.localStorage;
		} catch(e) {
			$scope.wsSupported = false;
			return false;
		}
	}
	$scope.storage = lsTest();
	if($scope.wsSupported) {
		if($scope.storage.waluty !== undefined) {
			var json = JSON.parse($scope.storage.waluty);
			var old = new Date(Date.parse(json[0].effectiveDate));
			var now = new Date();
			if(now.getMonth() - old.getMonth() == 0) {
				old_day = old.getDate();
				now_day = now.getDate();
				if(now_day - old_day == 0) {
					$scope.up_to_date = true;
				} else {
					if(now_day - old_day == 1 && (now.getDay() == 0 || now.getDay() == 6)) {
						$scope.up_to_date = true;
					} else {
						$scope.up_to_date = false;
					}
				}
			} else {
				$scope.up_to_date = false;
			}
		}
	}
	if($scope.up_to_date == false) {
		$http.get("http://api.nbp.pl/api/exchangerates/tables/A?format=json")
		.then(function(response) {
			$scope.waluty = response.data;

			window.localStorage.waluty = JSON.stringify($scope.waluty);
		});
	}
});
