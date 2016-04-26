angular.module('app.secret').factory('SecretRequests', function($http) {

    var myService = {
        updateSecretRequest: function(secretToUpdate) {
            return promise = $http({
                method: 'PUT',
                url: '/secret_edit',
                data: secretToUpdate
            });
        },
        createSecretRequest: function(secretToCreate) {
            return promise = $http({
                method: 'POST',
                url: '/secret_add',
                data: secretToCreate
            });
        }
    };
    return myService;
});
