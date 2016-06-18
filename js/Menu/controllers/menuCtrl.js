let MenuController = function ($scope, $rootScope) {

	this.setActiveElement = function(el) {
		$scope.activeElement = el;
	};
	this.setRoute = function(route) {
		// console.log(route);
		$rootScope.$broadcast('menu-item-selected-event', {route: route})
	}; 
};

MenuController.$inject = ['$scope', '$rootScope'];

export default MenuController;