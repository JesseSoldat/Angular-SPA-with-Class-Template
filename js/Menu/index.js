import angular from 'angular';

import MenuController from './controllers/menuCtrl.js';
import menuDir from './directives/menuDir.js';
import menuItemDir from './directives/menuItemDir.js';

angular
	.module('menu', [])
	.controller('MenuController', MenuController)
	.directive('menuDir', menuDir)
	.directive('menuItemDir', menuItemDir);