#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
/* global angular */

'use strict';

angular.module('${rootArtifactId}', [
    'ngCookies',
    'ngAnimate',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'hljs',
    'gist'
])
.config(function (${symbol_dollar}locationProvider, ${symbol_dollar}stateProvider, ${symbol_dollar}urlRouterProvider, hljsServiceProvider) {
    ${symbol_dollar}locationProvider
        .html5Mode(false)
        .hashPrefix('!');

    ${symbol_dollar}urlRouterProvider.when('', '/');

    ${symbol_dollar}stateProvider
        .state('home', {
            abstract: false,
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'AppCtrl'
        });

    hljsServiceProvider.setOptions({
        // replace tab with 4 spaces
        tabReplace: '    '
    });
})
.factory('${symbol_dollar}exceptionHandler', function (${symbol_dollar}log, ${symbol_dollar}window, StacktraceSvc) {
    return function (exception, cause) {

        try {

            var errorMessage = exception.toString();
            var stackTrace = StacktraceSvc.print({ e: exception });

            // Log the JavaScript error to the server.
            // --
            // NOTE: In this demo, the POST URL doesn't
            // exists and will simply return a 404.
            ${symbol_dollar}log.error(angular.toJson({
                    errorUrl: ${symbol_dollar}window.location.href,
                    errorMessage: errorMessage,
                    stackTrace: stackTrace,
                    cause: ( cause || '' )
                })
            );

        } catch ( loggingError ) {

            // For Developers - log the log-failure.
            ${symbol_dollar}log.warn( 'Error logging failed' );
            ${symbol_dollar}log.log( loggingError );

        }
    };
});
