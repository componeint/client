/**
 * Created by anonymous on 10/12/15 8:37.
 */

(function() {
    'use strict';

    angular
        .module('client')
        .controller('StaticpageRightController', StaticpageRightController);

    StaticpageRightController.$inject = ['$timeout', '$mdSidenav', '$log'];

    /* @ngInject */
    function StaticpageRightController($timeout, $mdSidenav, $log) {
        var vm   = this;
        vm.title = 'StaticpageRightController';
        vm.close = function() {
            $mdSidenav('right').close().then(function() {
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

