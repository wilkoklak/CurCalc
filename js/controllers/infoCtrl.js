a_app.controller("infoCtrl", function($rootScope) {
	for(i = 0; i < $rootScope.menu_items.length; i++) {
		$rootScope.menu_items[i].active = "";
	}
	$rootScope.menu_items[1].active = "active";
})
