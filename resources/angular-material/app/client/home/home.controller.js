/**
 * Created by anonymous on 10/12/15 2:32.
 */

(function() {
    'use strict';

    angular
        .module('client')
        .controller('ClientHomeController', ClientHomeController);

    ClientHomeController.$inject = [];

    /* @ngInject */
    function ClientHomeController() {
        var vm   = this;
        vm.title = 'ClientHomeController';

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

