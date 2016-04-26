angular.module('app', ['ngRoute',  'app.main', 'app.component1', 'app.library', 'app.secret'])
    .config(function ($locationProvider) {
        'use strict';
        $locationProvider.html5Mode(false);
    });
