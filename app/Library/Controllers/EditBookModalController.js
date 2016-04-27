angular.module('app.library').controller('EditBookModalController', function($scope, $modalInstance, selectedBook, BookServices) {
    'use strict';

    $scope.editedBook = {};
    $scope.date = {};
    // validation controller
    $scope.isRequired = true;

    $scope.dateTimeNow = function() {
        $scope.date = new Date();
    }();

    $scope.init = function() {
        $scope.editedBook.title = selectedBook.title;
        $scope.editedBook.author = selectedBook.author;
        $scope.editedBook.genre = selectedBook.genre;
        $scope.editedBook.year = $scope.date.getFullYear();
    }();

    $scope.editBook = function(editedBook) {
        $scope.mockUpdate(editedBook);
        BookServices.editBookOperation(selectedBook);
        $scope.close();
    };

    $scope.close = function() {
        $modalInstance.close();
    };

    $scope.mockUpdate = function(editedBook) {
        selectedBook.title = editedBook.title;
        selectedBook.author = editedBook.author;
        selectedBook.genre = editedBook.genre;
        selectedBook.year = $scope.date.getFullYear();
    };

});
