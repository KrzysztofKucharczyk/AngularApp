angular.module('app.secret').factory('SecretServices', function($q, SecretRequests) {
    var myService = {

        editSecretOperation: function(editedSecret) {
            var mySecret = angular.copy(editedSecret);
            var defer = $q.defer();
            SecretRequests.updateSecretRequest(mySecret).then(
                function(response) {
                    defer.resolve(response.data);
                },
                function(response) {
                    defer.reject(response.data);
                });
        },

        createSecretOperation: function(savedSecret) {
            var mySecret = angular.copy(savedSecret);
            var defer = $q.defer();
            alert(mySecret);
            SecretRequests.createSecretRequest(mySecret).then(
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
