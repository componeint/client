/**
 * Created by anonymous on 03/01/16 4:33.
 */

(function() {
    'use strict';

    angular
        .module('client')
        .controller('StaticpageSidenavController', StaticpageSidenavController);

    StaticpageSidenavController.$inject = ['$timeout', '$mdSidenav', '$log'];

    /* @ngInject */
    function StaticpageSidenavController($timeout, $mdSidenav, $log) {
        var vm   = this;
        vm.title = 'StaticpageSidenavController';
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

