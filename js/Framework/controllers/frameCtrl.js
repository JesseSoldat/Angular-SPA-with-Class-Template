let FrameController = function($scope, $window) {

	$scope.isMenuVisible = true;
	$scope.isMenuButtonVisible = true;


	$scope.$on('menu-item-selected-event', function (evt, data) {
		console.log(data.route);
		$scope.routeString = data.route;
	})

	$($window).on('resize.framework', function() {
		$scope.$apply(function () {
			checkWidth();
		})
	})
	var checkWidth = function () {
		var width = Math.max($($window).width(), $window.innerWidth);
		$scope.isMenuVisible = (width > 768);
		$scope.isMenuButtonVisible = !$scope.isMenuVisible;


		
		
	}
};

FrameController.$inject = ['$scope', '$window'];

export default FrameController;