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
			scope.isActive = function () {
				return el === ctrl.getActiveElement();
			};
			scope.isVertical = function () {
				return ctrl.isVertical() || el.parents('.subitem-section').length > 0;
			};

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