/**
 * Created by anonymous on 10/12/15 8:25.
 */

(function() {
    'use strict';

    angular
        .module('client')
        .controller('StaticpageLeftController', StaticpageLeftController);

    StaticpageLeftController.$inject = ['$timeout', '$mdSidenav', '$log'];

    /* @ngInject */
    function StaticpageLeftController($timeout, $mdSidenav, $log) {
        var vm   = this;
        vm.title = 'StaticpageLeftController';
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

