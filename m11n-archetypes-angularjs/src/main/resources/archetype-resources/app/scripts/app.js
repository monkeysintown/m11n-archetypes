#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
/* global angular */

'use strict';

angular.module('${artifactId}', [
    'ngCookies',
    'ngAnimate',
    'ngTouch',
    'ngSanitize',
    'gettext',
    'mgcrea.ngStrap',
    'ui.router',
    'xeditable',
    'angularFileUpload',
    'angularMoment'
])
.config(function (${symbol_dollar}locationProvider, ${symbol_dollar}stateProvider, ${symbol_dollar}urlRouterProvider, ${symbol_dollar}modalProvider, ${symbol_dollar}asideProvider, ${symbol_dollar}sceDelegateProvider) {
    // TODO: remove this in production; just to avoid CORS problems
    // see here more: https://docs.angularjs.org/api/ng/provider/${symbol_dollar}sceDelegateProvider#resourceUrlWhitelist
    ${symbol_dollar}sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'http://localhost:8080/**']);

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
        })
        .state('about', {
            abstract: false,
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        });

    angular.extend(${symbol_dollar}modalProvider.defaults, {
        html: true,
        animation: 'am-flip-x'
    });

    angular.extend(${symbol_dollar}asideProvider.defaults, {
        html: true,
        //backdrop: 'static',
        container: 'body',
        animation: 'am-fade-and-slide-left',
        placement: 'top'
    });

    //${symbol_dollar}httpProvider.interceptors.push(someHttpInterceptor);
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
        //${symbol_dollar}log.error('This is the cause: ' + cause);
        //exception.message += ' (caused by "' + cause + '")';
        //throw exception;
    };
}).run(function(editableOptions) {
    editableOptions.theme = 'bs3';
});
