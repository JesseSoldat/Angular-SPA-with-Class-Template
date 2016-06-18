let FrameController = function($scope, $window, $rootScope) {

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
	$scope.$on('$destroy', function () {
		$($window).off('resize.framework');
	});
	let checkWidth = function () {
		var width = Math.max($($window).width(), $window.innerWidth);
		$scope.isMenuVisible = (width > 768);
		$scope.isMenuButtonVisible = !$scope.isMenuVisible;	
	};
	$scope.menuButtonClicked = function () {
		$scope.isMenuVisible = !$scope.isMenuVisible;
		broadcastMenuState();
		// $scope.$apply();
	};
	let broadcastMenuState = function () {
		$rootScope.$broadcast('menu-show', 
		{	show: $scope.isMenuVisible }
		);
	};
};

FrameController.$inject = ['$scope', '$window', '$rootScope'];

export default FrameController;