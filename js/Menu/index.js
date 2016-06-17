import angular from 'angular';

import MenuController from './controllers/menuCtrl.js';
import menuDir from './directives/menuDir.js';

angular
	.module('menu', [])
	.controller('MenuController', MenuController)
	.directive('menuDir', menuDir);