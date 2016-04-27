angular.module('app.secret').controller('EditSecretModalController', function($scope, $modalInstance, selectedSecret, SecretServices) {
    'use strict';

    // validation controller
    $scope.isRequired = true;

    $scope.editedSecret = {};

    $scope.init = function() {
        $scope.editedSecret.who = selectedSecret.who;
        $scope.editedSecret.about = selectedSecret.about;
        $scope.editedSecret.message = selectedSecret.message;
        $scope.editedSecret.scaryValue = selectedSecret.scaryValue;
    }();

    $scope.editSecret = function(editedSecret) {
        $scope.mockUpdate(editedSecret);
        SecretServices.editSecretOperation(selectedSecret);
        $scope.close();
    };

    $scope.close = function() {
        $modalInstance.close();
    };

    $scope.mockUpdate = function(editedSecret) {
        selectedSecret.who = editedSecret.who;
        selectedSecret.about = editedSecret.about;
        selectedSecret.message = editedSecret.message;
        if (!isNaN(editedSecret.scaryValue))
            selectedSecret.scaryValue = editedSecret.scaryValue || 0;
        else
            selectedSecret.scaryValue = 0;

    };

});
