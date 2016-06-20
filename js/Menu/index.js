import angular from 'angular';
import animate from 'angular-animate';

import MenuController from './controllers/menuCtrl.js';
import menuDir from './directives/menuDir.js';
import menuItemDir from './directives/menuItemDir.js';
import menuGroupDir from './directives/menuGroupDir.js';

angular
	.module('menu', ['ngAnimate'])
	.controller('MenuController', MenuController)
	.directive('menuDir', menuDir)
	.directive('menuItemDir', menuItemDir)
	.directive('menuGroupDir', menuGroupDir);