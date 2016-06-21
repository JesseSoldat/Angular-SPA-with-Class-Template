import angular from 'angular';
import router from 'angular-route';
import $ from 'jquery';

import config from './appRouteConfig';

import './Framework/index';

// console.log('Hello, World');


angular
	.module('app', ['ngRoute','framework'])
	.config(config)
	;