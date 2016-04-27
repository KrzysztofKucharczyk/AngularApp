angular.module('app.library').controller('AddBookModalController', function($scope, $modalInstance, BookServices, passedBooks) {
    'use strict';

    // validation controller
    $scope.isRequired = true;

    $scope.analyzeNewBook = function(newBook) {
        if (newBook !== undefined) {
            newBook.id = passedBooks.length + 1;
            newBook.year = $scope.date.getFullYear();

            $scope.mockCreate(newBook);
            $scope.myBook = angular.copy(newBook);
            BookServices.createBookOperation($scope.myBook);
            $scope.close();
        }
    };

    // cancel button functionality
    $scope.close = function() {
        $modalInstance.close();
    };

    $scope.mockCreate = function(newBook) {
        passedBooks.push(newBook);
    };

    $scope.dateTimeNow = function() {
        $scope.date = new Date();
    }();

});
