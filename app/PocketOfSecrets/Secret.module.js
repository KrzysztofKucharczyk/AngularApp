angular.module('app.secret', ['ngRoute'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider.when('/PocketOfSecrets/SecretList', {
          templateUrl: 'PocketOfSecrets/Views/SecretList.html',
          controller: 'PocketController',
          resolve: {
              secrets: function($http){
                  return $http.get('/PocketOfSecrets/secrets.json');
              }
          }
        });
    });
