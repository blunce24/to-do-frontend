(function() {
    function CreateModalCtrl($uibModalInstance) {
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
        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
    
    angular
        .module('toDo')
        .controller('CreateModalCtrl', ['$uibModalInstance', CreateModalCtrl]);
})();