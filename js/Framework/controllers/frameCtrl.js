let FrameController = function($scope, $window, $rootScope, $timeout) {

	$scope.isMenuVisible = true;
	$scope.isMenuButtonVisible = true;


	$scope.$on('menu-item-selected-event', function (evt, data) {
		$scope.routeString = data.route;
		checkWidth();
		broadcastMenuState();
	})

	$($window).on('resize.framework', function() {
		$scope.$apply(function () {
			checkWidth();
			broadcastMenuState();
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
	$timeout(function () {
		checkWidth();
	},0);

};

FrameController.$inject = ['$scope', '$window', '$rootScope','$timeout'];

export default FrameController;