angular.module('app.component2', ['ngRoute', 'app.component2.templates'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider.when('/Library/BookList', {
          templateUrl: 'Library/Views/BookList.html',
          controller: 'LibraryController',
          resolve: {
              books: function($http){
                  return $http.get('/Library/books.json');
              }
          }
        });
    });
