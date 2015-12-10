/**
 * Created by anonymous on 10/12/15 2:53.
 */

(function() {
    'use strict';

    angular
        .module('client')
        .controller('ClientRightController', ClientRightController);

    ClientRightController.$inject = ['$timeout', '$mdSidenav', '$log'];

    /* @ngInject */
    function ClientRightController($timeout, $mdSidenav, $log) {
        var vm   = this;
        vm.title = 'ClientRightController';
        vm.close = function() {
            $mdSidenav('right').close()
                .then(function() {
                    // $log.debug("close RIGHT is done");
                });
        };

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

