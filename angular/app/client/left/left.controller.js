/**
 * Created by anonymous on 10/12/15 2:35.
 */

(function() {
    'use strict';

    angular
        .module('client')
        .controller('ClientLeftController', ClientLeftController);

    ClientLeftController.$inject = ['$timeout', '$mdSidenav', '$log'];

    /* @ngInject */
    function ClientLeftController($timeout, $mdSidenav, $log) {
        var vm   = this;
        vm.title = 'ClientLeftController';
        vm.close = function() {
            $mdSidenav('left').close()
                .then(function() {
                    // $log.debug("close LEFT is done");
                });
        };

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

