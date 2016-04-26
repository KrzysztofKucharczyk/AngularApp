angular.module('app.component2').factory('BookRequests', function($http) {

    var myService = {
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
