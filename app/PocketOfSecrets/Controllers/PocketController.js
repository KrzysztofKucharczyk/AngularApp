angular.module('app.secret').controller('PocketController', function($scope, $modal, secrets) {
    'use strict';

    $scope.selectedRowIndex = -1;
    $scope.isSelected = false;

    $scope.data = {
        secrets: []
    };

    angular.copy(secrets.data, $scope.data.secrets);

    $scope.add = function(secrets) {
        $modal.open({
            templateUrl: '/PocketOfSecrets/Views/Modal/AddModal.html',
            controller: 'AddSecretModalController',
            size: 'lg',
            resolve: {
                passedSecrets: function() {
                    return $scope.data.secrets;
                }
            }
        });
    };

    $scope.edit = function() {
        $modal.open({
            templateUrl: '/PocketOfSecrets/Views/Modal/EditModal.html',
            controller: 'EditSecretModalController',
            size: 'lg',
            resolve: {
                selectedSecret: function() {
                    return $scope.data.secrets[$scope.selectedRowIndex];
                }
            }
        });
    };

    $scope.selectRow = function(index) {

        if ($scope.isSelected === false || index !== $scope.selectedRowIndex) {
            $scope.selectedRowIndex = index;
            $scope.isSelected = true;
        } else {
            $scope.selectedRowIndex = -1;
            $scope.isSelected = false;
        }
    };
});
