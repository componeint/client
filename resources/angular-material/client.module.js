/**
 * client.module.js
 * Created by anonymous on 09/12/15 13:12.
 */

(function() {
    'use strict';

    angular
        .module('client', [
            /* Shared */
            'appFoundation',
            'widgets',

            /* components */
            'dashboard',
            'seneschal'
        ]);

})();