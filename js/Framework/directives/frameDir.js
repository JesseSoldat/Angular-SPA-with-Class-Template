let frameDir = function() {
	return {
		transclude: true,
		controller: 'FrameController',
		scope: {
			title: '@',
			subtitle: '@',
			iconFile: '@'

		},
		templateUrl: './templates/frame.tpl.html'

	}
};

frameDir.$inject = [];

export default frameDir;