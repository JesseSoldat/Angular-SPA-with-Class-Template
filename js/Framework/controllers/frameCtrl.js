let FrameController = function($scope) {
	$scope.$on('menu-item-selected-event', function (evt, data) {
		$scope.routeString = data.route;
	})
};

FrameController.$inject = ['$scope'];

export default FrameController;