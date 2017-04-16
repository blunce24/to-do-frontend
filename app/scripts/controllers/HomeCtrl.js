(function() {
    function HomeCtrl(ApiRequests, $cookies) {
        this.ApiRequests = ApiRequests;
        
        this.currentUser = $cookies.get('blocChatCurrentUser');
    }
    
    angular 
        .module('toDo')
        .controller('HomeCtrl', ['ApiRequests', '$cookies', HomeCtrl])
})();