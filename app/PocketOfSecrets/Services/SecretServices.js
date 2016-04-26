angular.module('app.secret').factory('SecretServices', function($q, SecretRequests) {
    var myService = {
        getSecretsOperation: function() {
            var defer = $q.defer();
            return SecretRequests.getSecretsRequest().then(
                function(response) {
                    defer.resolve(response.data);
                    return defer.promise;
                },
                function(response) {
                    defer.reject(response.data);
                });
        },

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
