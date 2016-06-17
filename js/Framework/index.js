import angular from 'angular';


import '../menu/index';


import FrameController from './controllers/frameCtrl';

import frameDir from './directives/frameDir';


angular
	.module('framework', ['menu'])

	.controller('FrameController', FrameController)

	.directive('frameDir', frameDir)


	;