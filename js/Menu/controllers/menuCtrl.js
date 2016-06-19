let MenuController = function ($scope, $rootScope) {

	$scope.showMenu = true;
	$scope.isVertical = true;

	this.getActiveElement = function() {
		return $scope.activeElement;
	};
	this.setActiveElement = function(el) {
		$scope.activeElement = el;
	};
	this.isVertical = function() {
		return $scope.isVertical;
	};
	this.setRoute = function(route) {
		// console.log(route);
		$rootScope.$broadcast('menu-item-selected-event', {route: route})
	}; 
	$scope.toggleMenuOrientation = function () {
		$scope.isVertical = !$scope.isVertical;

		$rootScope.$broadcast('menu-orientation-changed-event', 
			{ isMenuVertical: $scope.isVertical });
	};

	$scope.$on('menu-show', function (evt, data) {
		$scope.showMenu = data.show;
	})
};

MenuController.$inject = ['$scope', '$rootScope'];

export default MenuController;