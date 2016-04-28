angular.module('app.library').factory('BookServices', function($q, BookRequests) {
    var myService = {
        getBooksOperation: function(closeSpinnerFnct) {
            var defer = $q.defer();
            
            return BookRequests.getBooksRequest().then(
                function(response) {
                    closeSpinnerFnct();
                    defer.resolve(response.data);
                    return defer.promise;
                },
                function(response) {
                    console.log("Books cannot be fetched from db.");
                    closeSpinnerFnct();
                    defer.reject(response.data);
                    return defer.promise;
                });
        },
        createBookOperation: function(book) {
            var bookToSave = angular.copy(book);
            var defer = $q.defer();

            return BookRequests.createBookRequest(bookToSave).then(
                function(response) {
                    defer.resolve(response.config.data);
                    console.log("Added new book.");
                    return defer.promise;
                },
                function(response) {
                    console.log("New book could not be saved.");
                    defer.reject(response.data);
                    return defer.promise;
                });
        },

        editBookOperation: function(book) {
            var bookToEdit = angular.copy(book);
            var defer = $q.defer();

            return BookRequests.updateBookRequest(bookToEdit).then(
                function(response) {
                    console.log("Book has been successfully edited.");
                    defer.resolve(response.data);
                    return defer.promise;
                },
                function(response) {
                    console.log("Changes could not be submited.");
                    defer.reject(response.data);
                    return defer.promise;
                });
        }
    }
    return myService;
});
