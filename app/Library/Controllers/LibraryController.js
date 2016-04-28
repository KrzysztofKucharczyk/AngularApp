angular.module('app.library').controller('LibraryController', function($scope, $modal, BookServices) {
    'use strict';

    // marks row in table, which is currently selected. Value -1 means no row selected.
    $scope.selectedRowIndex = -1;
    // marks error wih fetching data
    $scope.errorGettingBook = false;
    // flag for spinner
    $scope.spinnerForLoadingData = false;

    // Stores all books in library
    $scope.data = {
        books: []
    };

    /*
     * Shows modal for adding book.
     * It has all required fields to operate on book entity.
     * Uses $http service (POST method) to send appropriate request with
     * appropriate data.
     *
     * If respond is successfull, list of books will be updated.
     * Otherwise no data will be added.
     */
    $scope.showAddModal = function(books) {
        var modalInstance = $modal.open({
            templateUrl: '/Library/Views/Modal/AddModal.html',
            controller: 'AddBookModalController',
            size: 'lg',
            resolve: {
                bookListFromLibrary: function() {
                    return $scope.data.books;
                }
            }
        });
    };

    /*
     * Shows modal for editing book.
     * It has all required fields to operate on book entity.
     * Uses $http service (PUT method) to send appropriate request with
     * appropriate data.
     *
     * If respond is successfull, given book will be updated.
     * Otherwise no data will be changed.
     */
    $scope.showEditModal = function() {
        $modal.open({
            templateUrl: '/Library/Views/Modal/EditModal.html',
            controller: 'EditBookModalController',
            size: 'md',
            resolve: {
                selectedBookFromLibrary: function() {
                    return $scope.data.books[$scope.selectedRowIndex];
                }
            }
        });
    };

    /*
     * Allows selecting one row. Useful for operation, which requires just one
     * entity, like editing desired book. This method works on $scope variable
     * isSelected and allows to toggle between it's two possible states.
     * When no row is selected, selectedRowIndex is equal to -1.
     */
    $scope.selectRow = function(index) {
        ($scope.selectedRowIndex === -1 || index !== $scope.selectedRowIndex) ?
        $scope.selectedRowIndex = index: $scope.selectedRowIndex = -1;
    };

    /*
     * Method takes all books from database via $http service (GET method). Fetches them
     * and then fill data.books structure with them.
     * If fetching was unsuccessful, no data will be given to data.books.
     */
    $scope.getAllBooks = function() {
        $scope.books = {};
        $scope.spinnerForLoadingData = true;
        BookServices.getBooksOperation(function() {
            $scope.spinnerForLoadingData = false;
        }).then(function(response) {
            $scope.data.books = response;
            $scope.errorGettingBook = false;
        }, function() {
            $scope.errorGettingBook = true;
        });
    }();

    $scope.filterFunction = function(element) {
        return element.name.match(/^Ma/) ? true : false;
    };
});
