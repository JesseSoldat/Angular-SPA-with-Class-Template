import angular from 'angular';

import FrameController from './controllers/frameCtrl';

import frameDir from './directives/frameDir';


angular
	.module('framework', [])

	.controller('FrameController', FrameController)

	.directive('frameDir', frameDir)


	;