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
		$rootScope.$broadcast('menu-item-selected-event', {route: route})
	}; 
	this.setOpenMenuScope = function (scope) {
		$scope.OpenMenuScope = scope;
	};
	$scope.toggleMenuOrientation = function () {
		// close any open menu
		if ($scope.OpenMenuScope) {
			$scope.OpenMenuScope.closeMenu();
		}

		$scope.isVertical = !$scope.isVertical;

		$rootScope.$broadcast('menu-orientation-changed-event', 
			{ isMenuVertical: $scope.isVertical });
	};

	$scope.$on('menu-show', function (evt, data) {
		$scope.showMenu = data.show;
		$scope.isVertical = data.isVertical;
		$scope.allowHorizontalToggle = data.allowHorizontalToggle;

	})
	angular.element(document).bind('click', function (e) {
		if ($scope.OpenMenuScope && !$scope.isVertical) {
			if ($(e.target).parent().hasClass('selectable-item')) 
				return;
			$scope.$apply(function () {
				$scope.OpenMenuScope.closeMenu();
			});
			e.preventDefault();
			e.stopPropagation();

		}
	});
};

MenuController.$inject = ['$scope', '$rootScope'];

export default MenuController;