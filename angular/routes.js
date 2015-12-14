/**
 * Created by anonymous on 09/12/15 13:12.
 */

(function() {
    'use strict';

    angular
        .module('client')
        .config(clientRouter);

    clientRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

    /* @ngInject */
    function clientRouter($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('client', {
                abstract: true,
                views   : {
                    'layout@'      : {
                        templateUrl : layout('client.simple'),
                        controller  : 'ClientController',
                        controllerAs: 'client'
                    },
                    'header@client': {
                        templateUrl : view('client.header'),
                        controller  : 'ClientHeaderController',
                        controllerAs: 'header'
                    },
                    'left@client'  : {
                        templateUrl : view('client.left'),
                        controller  : 'ClientLeftController',
                        controllerAs: 'left'
                    },
                    'right@client' : {
                        templateUrl : view('client.right'),
                        controller  : 'ClientRightController',
                        controllerAs: 'right'
                    },
                    'footer@client': {
                        templateUrl : view('client.footer'),
                        controller  : 'ClientFooterController',
                        controllerAs: 'footer'
                    },
                    'main@client'  : {}
                }
            })
            .state('client.home', {
                url  : '/',
                data : {pageName: 'Homepage'},
                views: {
                    'main@client': {
                        templateUrl : view('client.home'),
                        controller  : 'ClientHomeController',
                        controllerAs: 'home'
                    }
                }
            })
            .state('staticpage', {
                abstract: true,
                url     : '/page',
                views   : {
                    'layout@'          : {
                        templateUrl : layout('staticpage.simple'),
                        controller  : 'StaticpageController',
                        controllerAs: 'staticpage'
                    },
                    'header@staticpage': {
                        templateUrl : view('staticpage.header'),
                        controller  : 'StaticpageHeaderController',
                        controllerAs: 'header'
                    },
                    'left@staticpage'  : {
                        templateUrl : view('staticpage.left'),
                        controller  : 'StaticpageLeftController',
                        controllerAs: 'left'
                    },
                    'right@staticpage' : {
                        templateUrl : view('staticpage.right'),
                        controller  : 'StaticpageRightController',
                        controllerAs: 'right'
                    },
                    'footer@staticpage': {
                        templateUrl : view('staticpage.footer'),
                        controller  : 'StaticpageFooterController',
                        controllerAs: 'footer'
                    },
                    'main@staticpage'  : {}
                }
            })
            .state('staticpage.landing', {
                url  : '/',
                data : {pageName: 'Landing page'},
                views: {
                    'main@staticpage': {
                        templateUrl : view('staticpage.landing'),
                        controller  : 'StaticpageLandingController',
                        controllerAs: 'landing'
                    }
                }
            });

        function view(viewName) {
            if (viewName !== '') {
                return './views/app/' + appName(viewName) + '/' + fileDir(viewName) + '/' + fileName(viewName) + '.html';
            } else {
                return './views/app/app/home/home.html';
            }
        }

        function layout(viewName) {
            if (viewName !== '') {
                return './views/layouts/' + appName(viewName) + '/' + fileDir(viewName) + '/' + fileName(viewName) + '.html';
            } else {
                return './views/app/app/home/home.html';
            }

        }

        function appName(v) {
            if (v.split('.')[0]) {
                return v.split('.')[0];
            } else {
                return 'app';
            }
        }

        function fileDir(v) {
            if (v.split('.')[1]) {
                return v.split('.')[1];
            } else if (!v.split('.')[0]) {
                return v;
            } else {
                return 'home';
            }
        }

        function fileName(v) {
            if (v.split('.')[2]) {
                return v.split('.')[2];
            } else if (!v.split('.')[2]) {
                if (v.split('.')[1]) {
                    return v.split('.')[1];
                }
            } else {
                return 'home';
            }
        }
    }

})();

