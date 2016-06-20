let menuDir = function ($timeout) {
	return {
		transclude: true,
		controller: "MenuController",
		scope: {

		},
		templateUrl: "./templates/menu.tpl.html",
		link: function (scope, el, attr) {
			// var item = el.find('selectable-item:first');
			// console.log(item);
			// $timeout(function () {
			// 	item.trigger('click');
			// });
		}
 
	}
};

menuDir.$inject = ['$timeout'];

export default menuDir;