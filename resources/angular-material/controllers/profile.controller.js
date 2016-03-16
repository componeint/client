/**
 * profile.controller.js
 * Created by anonymous on 16/03/16 22:40.
 */

(function() {
    'use strict';

    angular
        .module('client')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$state', 'jwtAuthService'];

    /* @ngInject */
    function ProfileController($state, jwtAuthService) {

        var vm     = this;

        vm.signout = signout;

        activate();

        ////////////////

        function activate() {
            //
        }

        function signout() {

            jwtAuthService.signout().then(function() {
                $state.go('jwtauth.signin');
            });

        }

    }

})();
