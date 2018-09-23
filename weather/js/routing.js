//(function () {
//    'use strict';

    app.config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {



        var base = './';

        $urlRouterProvider.otherwise('');

        $stateProvider
            .state('/moscow', {
                url: '',
                controller: 'CityController',
                templateUrl: base + 'pages/city.view.html',
                controllerAs: 'vm',
                id: "moscow",
                params: {
                    id: 524901
                }
            })
            //nested list with children states for home
            .state('/piter', {
                url: '/piter',
                templateUrl: base + 'pages/city.view.html',
                controller: 'CityController',
                controllerAs: 'vm',
                id: "piter",
                params: {
                    id: 498817
                }
            })


            .state('/eburg', {
                url: '/eburg',
                controller: 'CityController',
                templateUrl: base + 'pages/city.view.html',
                controllerAs: 'vm',
                id: "eburg",
                params: {
                    id: 1486209
                }
            });


    }
//})();