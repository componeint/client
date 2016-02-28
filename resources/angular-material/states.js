/**
 * states.js
 * Created by anonymous on 09/12/15 13:12.
 */

(function() {
    'use strict';

    angular
        .module('client')
        .config(clientRouter);

    clientRouter.$inject = ['$stateProvider', '$urlRouterProvider', 'layoutProvider'];

    /* @ngInject */
    function clientRouter($stateProvider, $urlRouterProvider, layoutProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('client', {
                abstract: true,
                views   : {
                    'layout@'       : {
                        templateUrl : layoutProvider.layout('minimalist.main'),
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
            .state('client.home', {
                url  : '/',
                data : {pageName: 'Homepage'},
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
                        templateUrl : layoutProvider.layout('staticpage.simple'),
                        controller  : 'StaticpageController',
                        controllerAs: 'staticpage'
                    },
                    'header@staticpage' : {
                        templateUrl : layoutProvider.view('staticpage.header'),
                        controller  : 'StaticpageHeaderController',
                        controllerAs: 'header'
                    },
                    'sidenav@staticpage': {
                        templateUrl : layoutProvider.view('staticpage.sidenav'),
                        controller  : 'StaticpageSidenavController',
                        controllerAs: 'sidenav'
                    },
                    'aside@staticpage'  : {
                        templateUrl : layoutProvider.view('staticpage.aside'),
                        controller  : 'StaticpageAsideController',
                        controllerAs: 'aside'
                    },
                    'footer@staticpage' : {
                        templateUrl : layoutProvider.view('staticpage.footer'),
                        controller  : 'StaticpageFooterController',
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
            });

    }

})();

