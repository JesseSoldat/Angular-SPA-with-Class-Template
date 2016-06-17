let menuItemDir = function () {
	return {
		// controller: '^menu',
		scope: {
			label: '@',
			icon: '@',
			route: '@'

		},
		templateUrl: './templates/menuItem.tpl.html'

	}
};

menuItemDir.$inject = [];

export default menuItemDir;