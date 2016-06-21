import angular from 'angular';
import router from 'angular-route';
import $ from 'jquery';

import config from './appRouteConfig';
import dashDir from './directives/dashDir.js'

import './Framework/index';

// console.log('Hello, World');


angular
	.module('app', ['ngRoute','framework'])
	.config(config)
	.directive('dashDir', dashDir)
	;