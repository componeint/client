/**
 * aside.controller.js
 * Created by anonymous on 03/01/16 5:29.
 */

(function() {
    'use strict';

    angular
        .module('app')
        .controller('StaticpageAsideController', StaticpageAsideController);

    StaticpageAsideController.$inject = ['$timeout', '$mdSidenav', '$log'];

    /* @ngInject */
    function StaticpageAsideController($timeout, $mdSidenav, $log) {
        var vm   = this;
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

