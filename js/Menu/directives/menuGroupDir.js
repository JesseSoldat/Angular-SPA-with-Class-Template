let menuGroupDir = function () {
	return {
		require: '^menuDir',
		transclude: true,
		scope: {
			label: '@',
			icon: '@'
		},
		templateUrl: './templates/menuGroup.tpl.html',
		link: function (scope, el, attr, ctrl) {
			scope.isOpen = false;
			scope.closeMenu = function () {
				scope.isOpen = false;
			};
			scope.clicked = function () {
				scope.isOpen = !scope.isOpen;
			};
		}

	};
};

menuGroupDir.$inject = [];

export default menuGroupDir;