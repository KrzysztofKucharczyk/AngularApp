angular.module('app.library').factory('BookServices', function($q, BookRequests) {
    var myService = {
        getBooksOperation: function() {
            var defer = $q.defer();
            return BookRequests.getBooksRequest().then(
                function(response) {
                    defer.resolve(response.data);
                    return defer.promise;
                },
                function(response) {
                    defer.reject(response.data);
                });
        },

        editBookOperation: function(editedBook) {
            var myBook = angular.copy(editedBook);
            var defer = $q.defer();
            BookRequests.updateBookRequest(myBook).then(
                function(response) {
                    defer.resolve(response.data);
                },
                function(response) {
                    defer.reject(response.data);
                });
        },

        createBookOperation: function(savedBook) {
            var myBook = angular.copy(savedBook);
            var defer = $q.defer();
            BookRequests.createBookRequest(myBook).then(
                function(response) {
                    defer.resolve(response.data);
                },
                function(response) {
                    defer.reject(response.data);
                });
        }
    };
    return myService;
});
