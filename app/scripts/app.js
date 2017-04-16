(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: 'templates/home.html'
        });
    }
    
    function BlocChatCookies($cookies, $uibModal, ApiRequests) {
        var modalInstance = $uibModal.open({
            templateUrl: '/templates/loginModal.html',
            controller: 'LoginModalCtrl',
            controllerAs: 'login',
            backdrop: 'static',
            keyboard: false
        });   
        modalInstance.result.then(function(user) {
            this.name = user.name;
            this.email = user.email;
            $cookies.put('blocChatCurrentUser', this.name);
            ApiRequests.userSpecific(this.email);
            var currentUser = $cookies.get('blocChatCurrentUser');
            console.log(currentUser);
        });  
    }
    
    angular 
        .module('toDo', ['ngCookies', 'ui.router', 'ui.bootstrap'])
        .config(config)
        .run(['$cookies', '$uibModal', 'ApiRequests', BlocChatCookies]);
})();