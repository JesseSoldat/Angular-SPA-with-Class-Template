let config = function($routeProvider) {
	var routes = [
		{
			url: '/dashboard',
			config: {
				templateUrl: '../templates/test.html'
			}
		},
		{
			url: '/locations',
			config: {
				template: '<h1>Locations</h1>'
			}
		},
		{
			url: '/guides',
			config: {
				template: '<h1>Guides</h1>'
			}
		}

	];

	routes.forEach(function (route) {
		// console.log(route.url);
		$routeProvider.when(route.url, route.config);
	})
	$routeProvider.otherwise( {	redirectTo: './dashboard'});
};

config.$inject = ['$routeProvider'];

export default config;