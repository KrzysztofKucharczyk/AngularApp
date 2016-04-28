angular.module('app.library').controller('EditBookModalController', function($scope, $modalInstance, selectedBookFromLibrary, BookServices) {
    'use strict';

    $scope.currentlyEditedBook = angular.copy(selectedBookFromLibrary);
    // flag for special security in edit modal
    $scope.allowEdit = false;
    // validation controller
    $scope.isRequired = true;

    /*
     * Toggles variable allowEdit, which disables or enables fields in edit form.
     */
    $scope.changeAllowRight = function() {
        $scope.allowEdit === false ? $scope.allowEdit = true : $scope.allowEdit = false;
    }

    $scope.editBook = function(book) {
        book.year = $scope.date.getFullYear();

        BookServices.editBookOperation(book).then(function() {
            $scope.updateBooksListInView(book);
        });
        $scope.close();
    };

    /*
     * It closes modal. Required for cancel button functionality.
     */
    $scope.close = function() {
        $modalInstance.close();
    };

    /*
     * Creates new entry in library view.
     */
    $scope.updateBooksListInView = function(book) {
        selectedBookFromLibrary.title = book.title;
        selectedBookFromLibrary.authors = book.authors;
        selectedBookFromLibrary.genre = book.genre;
        selectedBookFromLibrary.year = $scope.date.getFullYear();
    };

});
