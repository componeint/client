/**
 * Created by anonymous on 10/12/15 7:28.
 */

(function() {
    'use strict';

    angular
        .module('client')
        .controller('ClientController', ClientController);

    ClientController.$inject = [];

    /* @ngInject */
    function ClientController() {
        var vm   = this;
        vm.title = 'ClientController';

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

