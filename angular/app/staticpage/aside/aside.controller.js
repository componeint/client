/**
 * Created by anonymous on 03/01/16 5:29.
 */

(function() {
    'use strict';

    angular
        .module('client')
        .controller('StaticpageAsideController', StaticpageAsideController);

    StaticpageAsideController.$inject = ['$timeout', '$mdSidenav', '$log'];

    /* @ngInject */
    function StaticpageAsideController($timeout, $mdSidenav, $log) {
        var vm   = this;
        vm.title = 'StaticpageAsideController';
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

