let frameDir = function() {
	return {
		transclude: true,
		controller: 'FrameController',
		scope: {

		},
		templateUrl: './templates/frame.tpl.html'

	}
};

frameDir.$inject = [];

export default frameDir;