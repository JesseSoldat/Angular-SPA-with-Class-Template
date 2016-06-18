let menuItemDir = function () {
	return {
		require: '^menuDir',
		scope: {
			label: '@',
			icon: '@',
			route: '@'

		},
		templateUrl: './templates/menuItem.tpl.html',
		link: function (scope, el, attr, ctrl) {
			el.on('click', function (evt) {
				evt.stopPropagation();
				evt.preventDefault();
				scope.$apply(function () {
					ctrl.setActiveElement(el);
					ctrl.setRoute(scope.route);
				});

			});

		}

	}
};

menuItemDir.$inject = [];

export default menuItemDir;