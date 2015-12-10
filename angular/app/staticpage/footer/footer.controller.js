/**
 * Created by anonymous on 10/12/15 8:06.
 */

(function() {
    'use strict';

    angular
        .module('client')
        .controller('StaticpageFooterController', StaticpageFooterController);

    StaticpageFooterController.$inject = [];

    /* @ngInject */
    function StaticpageFooterController() {
        var vm   = this;
        vm.title = 'StaticpageFooterController';

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

