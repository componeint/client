/**
 * Created by anonymous on 10/12/15 2:22.
 */

(function() {
    'use strict';

    angular
        .module('client')
        .controller('ClientFooterController', ClientFooterController);

    ClientFooterController.$inject = [];

    /* @ngInject */
    function ClientFooterController() {
        var vm   = this;
        vm.title = 'ClientFooterController';

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

