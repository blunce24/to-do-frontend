(function() {
    function LoginModalCtrl($uibModalInstance, $uibModal, $cookies, ApiRequests) {
        this.ok = function(isValid) {
            if (isValid) {
                var user = {
                    name: this.name,
                    email: this.email,
                    password_digest: this.password
                };
                $uibModalInstance.close(user);
            }
        };
        
        this.newAccount = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/createModal.html',
                controller: 'CreateModalCtrl',
                controllerAs: 'create',
                backdrop: 'static',
                keyboard: false
            });
            modalInstance.result.then(function(user) {
                this.name = user.name;
                this.user = {
                    user: {
                        name: user.name,
                        email: user.email,
                        password_digest: user.password_digest
                    }
                };
                
                $cookies.put('blocChatCurrentUser', this.name);
                ApiRequests.createUsers(this.user);
                var currentUser = $cookies.get('blocChatCurrentUser');
                console.log(currentUser);
            });
        };
    }
    
    angular
        .module('toDo')
        .controller('LoginModalCtrl', ['$uibModalInstance', '$uibModal', '$cookies', 'ApiRequests', LoginModalCtrl]);
})();