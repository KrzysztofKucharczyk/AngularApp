angular.module('app.component2').controller('AddBookModalController', function($scope, $modalInstance, BookServices, passedBooks) {
    'use strict';

    $scope.analyzeNewBook = function(newBook) {
        newBook.id = passedBooks.length + 1;

        // $scope.mockCreate(newBook);
        $scope.myBook = angular.copy(newBook);
        BookServices.createBookOperation($scope.myBook);
        $scope.close();
    };

    // cancel button functionality
    $scope.close = function() {
        $modalInstance.close();
    };

    // $scope.mockCreate = function(newBook) {
    //     passedBooks.push(newBook);
    // };

});
