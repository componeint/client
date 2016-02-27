/**
 * sidenav.controller.js
 * Created by anonymous on 03/01/16 4:33.
 */

(function() {
    'use strict';

    angular
        .module('app')
        .controller('StaticpageSidenavController', StaticpageSidenavController);

    StaticpageSidenavController.$inject = ['$timeout', '$mdSidenav', '$log'];

    /* @ngInject */
    function StaticpageSidenavController($timeout, $mdSidenav, $log) {
        var vm   = this;
        vm.close = function() {
            $mdSidenav('left').close().then(function() {
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

