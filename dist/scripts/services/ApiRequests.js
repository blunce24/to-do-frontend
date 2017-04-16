(function() {
    function ApiRequests($http) {
        var ApiRequests = {};
        
        var users = {
            method: 'GET',
            url: 'http://localhost:3000/api/v1/users/',
//            headers: {'name': 'blunce', 'password_digest': 'Cards09'}
        };
        
        
        ApiRequests.createUsers = function(data) {
            $http.post('http://localhost:3000/api/v1/users/', data).then(function successCallback(response) {
                console.log(response);
            });
        };
        
        var lists = {
            method: 'GET',
            url: 'http://localhost:3000/api/v1/users/2/lists',
//            headers: {'name': 'blunce', 'password_digest': 'Cards09'}
        };
        
        $http(users).then(function successCallback(response) {
            ApiRequests.users = response;
        });
        
        $http(lists).then(function successCallback(response) {
            ApiRequests.lists = response;
        });
        
        ApiRequests.userSpecific = function(email) {
            console.log(email);
            var params = {email: email};
            $http.get('http://localhost:3000/api/v1/users/find_user/', {params: params}).then(function successCallback(response) {
                console.log(response);
            });
        };
        
        return ApiRequests;
    }
    
    angular
        .module('toDo')
        .factory('ApiRequests', ['$http', ApiRequests])
})();