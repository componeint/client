/**
 * Created by anonymous on 10/12/15 7:35.
 */

(function() {
    'use strict';

    angular
        .module('client')
        .controller('StaticpageController', StaticpageController);

    StaticpageController.$inject = [];

    /* @ngInject */
    function StaticpageController() {
        var vm   = this;
        vm.title = 'StaticpageController';

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

