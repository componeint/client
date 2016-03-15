/**
 * client.state.js
 * Created by anonymous on 09/12/15 13:12.
 */

(function() {
    'use strict';

    angular
        .module('client')
        .config(clientState);

    clientState.$inject = ['$stateProvider', '$urlRouterProvider', 'layoutProvider'];

    /* @ngInject */
    function clientState($stateProvider, $urlRouterProvider, layoutProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('client', {
                abstract: true,
                views   : {
                    'layout@'       : {
                        templateUrl : layoutProvider.layout('minimalist.theme'),
                        controller  : 'ClientController',
                        controllerAs: 'client'
                    },
                    'header@client' : {
                        templateUrl : layoutProvider.layout('minimalist.header'),
                        controller  : 'HeaderController',
                        controllerAs: 'header'
                    },
                    'sidenav@client': {
                        templateUrl : layoutProvider.layout('minimalist.sidenav'),
                        controller  : 'SidenavController',
                        controllerAs: 'sidenav'
                    },
                    'aside@client'  : {
                        templateUrl : layoutProvider.layout('minimalist.aside'),
                        controller  : 'AsideController',
                        controllerAs: 'aside'
                    },
                    'footer@client' : {
                        templateUrl : layoutProvider.layout('minimalist.footer'),
                        controller  : 'FooterController',
                        controllerAs: 'footer'
                    },
                    'main@client'   : {}
                }
            })
            .state('client.landing', {
                url  : '/',
                data : {pageName: 'Welcome'},
                views: {
                    'main@client': {
                        templateUrl : layoutProvider.view('client.landing'),
                        controller  : 'ClientLandingController',
                        controllerAs: 'landing'
                    }
                }
            })
            .state('client.home', {
                url  : '/home',
                data : {pageName: 'Home'},
                views: {
                    'main@client': {
                        templateUrl : layoutProvider.view('client.home'),
                        controller  : 'ClientHomeController',
                        controllerAs: 'home'
                    }
                }
            })
            .state('staticpage', {
                abstract: true,
                url     : '/page',
                views   : {
                    'layout@'           : {
                        templateUrl : layoutProvider.layout('minimalist.theme'),
                        controller  : 'StaticpageController',
                        controllerAs: 'staticpage'
                    },
                    'header@staticpage' : {
                        templateUrl : layoutProvider.layout('minimalist.header'),
                        controller  : 'HeaderController',
                        controllerAs: 'header'
                    },
                    'sidenav@staticpage': {
                        templateUrl : layoutProvider.layout('minimalist.sidenav'),
                        controller  : 'SidenavController',
                        controllerAs: 'sidenav'
                    },
                    'aside@staticpage'  : {
                        templateUrl : layoutProvider.layout('minimalist.aside'),
                        controller  : 'AsideController',
                        controllerAs: 'aside'
                    },
                    'footer@staticpage' : {
                        templateUrl : layoutProvider.layout('minimalist.footer'),
                        controller  : 'FooterController',
                        controllerAs: 'footer'
                    },
                    'main@staticpage'   : {}
                }
            })
            .state('staticpage.landing', {
                url  : '/',
                data : {pageName: 'Landing page'},
                views: {
                    'main@staticpage': {
                        templateUrl : layoutProvider.view('staticpage.landing'),
                        controller  : 'StaticpageLandingController',
                        controllerAs: 'landing'
                    }
                }
            })
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

