let config = function($routeProvider) {
	var routes = [
		{
			url: '/dashboard',
			config: {
				templateUrl: '../templates/dashboard.tpl.html'
			}
		},
		{
			url: '/locations',
			config: {
				templateUrl: '../templates/location.tpl.html'
				
			}
		},
		{
			url: '/guide',
			config: {
				templateUrl: '../templates/guide.tpl.html'
				
			}
		},
		{
			url: '/angular',
			config: {
				templateUrl: '../templates/angular.tpl.html'
				
			}
		},
		{
			url: '/react',
			config: {
				templateUrl: '../templates/react.tpl.html'
				
			}
		},
		{
			url: '/node',
			config: {
				templateUrl: '../templates/node.tpl.html'
				
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