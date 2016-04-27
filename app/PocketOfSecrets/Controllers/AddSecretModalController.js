angular.module('app.secret').controller('AddSecretModalController', function($scope, $modalInstance, SecretServices, passedSecrets) {
    'use strict';

    // validation controller
    $scope.isRequired = true;

    $scope.analyzeNewSecret = function(newSecret) {
        newSecret.id = passedSecrets.length + 1;
        $scope.mockCreate(newSecret);
        $scope.mySecret = angular.copy(newSecret);
        SecretServices.createSecretOperation($scope.mySecret);
        $scope.close();
    };

    $scope.close = function() {
        $modalInstance.close();
    };

    $scope.mockCreate = function(newSecret) {
        if (isNaN(newSecret.scaryValue))
            newSecret.scaryValue = 0;
        passedSecrets.push(newSecret);
    }

});
