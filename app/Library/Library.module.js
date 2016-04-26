angular.module('app.library', ['ngRoute'])
    .config(function($routeProvider) {
        'use strict';
        $routeProvider.when('/Library/BookList', {
            templateUrl: 'Library/Views/BookList.html',
            controller: 'LibraryController'
        })
    });
