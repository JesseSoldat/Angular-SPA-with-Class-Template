let menuDir = function () {
	return {
		transclude: true,
		controller: "MenuController",
		scope: {

		},
		templateUrl: "./templates/menu.tpl.html"

	}
};

menuDir.$inject = [];

export default menuDir;