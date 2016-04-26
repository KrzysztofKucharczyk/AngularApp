angular.module('app.library').factory('BookRequests', function($http) {

    var myService = {
        getBooksRequest: function() {
            return promise = $http({
                method: 'GET',
                url: '/Library/books.json',
            });
        },
        updateBookRequest: function(bookToUpdate) {
            return promise = $http({
                method: 'PUT',
                url: '/book_edit',
                data: bookToUpdate
            });
        },
        createBookRequest: function(bookToCreate) {
            return promise = $http({
                method: 'POST',
                url: '/book_add',
                data: bookToCreate
            });
        }
    };
    return myService;
});
