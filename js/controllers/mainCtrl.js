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
					if(now_day - old_day <= 2 && now.getDay() == 0 || now.getDay() == 6) {
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
			$rootScope.data_dt = $scope.waluty[0].effectiveDate;
			window.localStorage.waluty = JSON.stringify($scope.waluty);
		});
	} else {
		$scope.waluty = JSON.parse(window.localStorage.waluty);
		$rootScope.data_dt = $scope.waluty[0].effectiveDate;
	}
	$scope.calc = function() {
		console.log($scope.waluty);
		console.log($scope.w1);
		var w1 = $scope.waluty[0].rates[$scope.w1];
		var w2 = $scope.waluty[0].rates[$scope.w2];
		var ilosc = $scope.ilosc;
		var wynik = w1.mid * ilosc / w2.mid;
		$scope.wynik = ilosc + " " + w1.code + " jest warte " + wynik.toFixed(2) + " " + w2.code;
	}
});
