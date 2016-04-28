angular.module('app.library').controller('AddBookModalController', function($scope, $modalInstance, BookServices, bookListFromLibrary) {
    'use strict';

    // validation controller
    $scope.isRequired = true;

    /*
     * Add book to database. Uses $http (POST method).
     * Book is given without id and status.
     * Not including id will result in losing ability to edit book (no id, no checking for row).
     * Will update view only in case of success.
     */
    $scope.addBook = function(book) {
        if (book !== undefined) {
            setBookId(book);
            setBookYear(book);
            var bookToSave = angular.copy(book);

            BookServices.createBookOperation(bookToSave).then(function(response) {
                bookListFromLibrary.push(response);
            });
            $scope.close();
        }
    };

    /*
     * It closes modal. Required for cancel button functionality.
     */
    $scope.close = function() {
        $modalInstance.close();
    };

    /*
     * Gives book id bigger then the biggest in library.
     * Must be done, without it it's impossible to access edit modal of given
     * book.
     */
    var setBookId = function(book) {
        book.id = bookListFromLibrary[bookListFromLibrary.length - 1].id + 1;
    };

    /*
     * Gives book chosen by user year.
     */
    var setBookYear = function(book) {
        book.year = $scope.date.getFullYear().toString();
    };

});
