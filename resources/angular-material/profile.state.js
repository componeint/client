/**
 * profile.state.js
 * Created by anonymous on 15/03/16 7:28.
 */

(function() {
    'use strict';

    angular
        .module('client')
        .config(profileState);

    profileState.$inject = ['$stateProvider', '$urlRouterProvider', 'layoutProvider'];

    /* @ngInject */
    function profileState($stateProvider, $urlRouterProvider, layoutProvider) {

        $stateProvider
            .state('profile', {
                abstract: true,
                url     : '/profile',
                views   : {
                    'layout@'        : {
                        templateUrl : layoutProvider.layout('minimalist.theme'),
                        controller  : 'ProfileController',
                        controllerAs: 'profile'
                    },
                    'header@profile' : {
                        templateUrl : layoutProvider.layout('minimalist.header'),
                        controller  : 'HeaderController',
                        controllerAs: 'header'
                    },
                    'sidenav@profile': {
                        templateUrl : layoutProvider.layout('minimalist.sidenav'),
                        controller  : 'SidenavController',
                        controllerAs: 'sidenav'
                    },
                    'aside@profile'  : {
                        templateUrl : layoutProvider.layout('minimalist.aside'),
                        controller  : 'AsideController',
                        controllerAs: 'aside'
                    },
                    'footer@profile' : {
                        templateUrl : layoutProvider.layout('minimalist.footer'),
                        controller  : 'FooterController',
                        controllerAs: 'footer'
                    },
                    'main@profile'   : {}
                }
            })
            .state('profile.user', {
                url    : '/{user}',
                data   : {pageName: 'Profile'},
                views  : {
                    'main@profile': {
                        templateUrl : layoutProvider.view('profile.user'),
                        controller  : 'ProfileUserController',
                        controllerAs: '$ctrl'
                    }
                },
                resolve: {
                    loginRequired: loginRequired
                }
            });

        function loginRequired($q, $state, $auth) {

            var deferred = $q.defer();

            if ($auth.isAuthenticated()) {
                deferred.resolve();
            } else {
                $state.go('jwtauth.signin');
            }

            return deferred.promise;

        }

    }

})();

