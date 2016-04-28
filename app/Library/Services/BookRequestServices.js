angular.module('app.library').factory('BookRequests', function($http) {

    var bookRequestServices = {
        getBooksRequest: function() {
            return promise = $http({
                method: 'GET',
                url: 'http://localhost:8080/webstore/rbooks/',
            });
        },
        createBookRequest: function(book) {
            return promise = $http({
                method: 'POST',
                url: 'http://localhost:8080/webstore/rbooks/',
                data: book
            });
        },
        updateBookRequest: function(book) {
            return promise = $http({
                method: 'PUT',
                url: 'http://localhost:8080/webstore/rbook/' + book.id,
                data: book
            });
        }
    };
    return bookRequestServices;
});
