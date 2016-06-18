import angular from 'angular';

import MenuController from './controllers/menuCtrl.js';
import menuDir from './directives/menuDir.js';
import menuItemDir from './directives/menuItemDir.js';
import menuGroupDir from './directives/menuGroupDir.js';

angular
	.module('menu', [])
	.controller('MenuController', MenuController)
	.directive('menuDir', menuDir)
	.directive('menuItemDir', menuItemDir)
	.directive('menuGroupDir', menuGroupDir);