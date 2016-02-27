/**
 * Created by anonymous on 10/12/15 8:22.
 */

(function() {
    'use strict';

    angular
        .module('client')
        .controller('StaticpageLandingController', StaticpageLandingController);

    StaticpageLandingController.$inject = [];

    /* @ngInject */
    function StaticpageLandingController() {
        var vm   = this;
        vm.title = 'StaticpageLandingController';

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

