angular.module('app.component2').factory('BookServices', function($q, BookRequests) {
    var myService = {

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