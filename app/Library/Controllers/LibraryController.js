angular.module('app.component2').controller('LibraryController', function($scope, $http, $modal, books) {
    'use strict';

    $scope.selectedRowIndex = -1;
    $scope.isSelected = false;

    $scope.data = {
        books: []
    };

    angular.copy(books.data, $scope.data.books);

    $scope.add = function(books) {
        $modal.open({
            templateUrl: '/Library/Views/Modal/AddModal.html',
            controller: 'AddBookModalController',
            size: 'lg',
            resolve: {
                passedBooks: function() {
                    return $scope.data.books;
                }
            }
        });
    };

    $scope.edit = function() {
        $modal.open({
            templateUrl: '/Library/Views/Modal/EditModal.html',
            controller: 'EditBookModalController',
            size: 'lg',
            resolve: {
                selectedBook: function() {
                    return $scope.data.books[$scope.selectedRowIndex];
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
