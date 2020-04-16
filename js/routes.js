//ROUTES
weatherApp.config(function($routeProvider) {
   $routeProvider
   .when('/', {
       templateUrl: 'pages/home.htm',
       controller: 'homeController'
   })
    .when('/forecast', {
       templateUrl: 'pages/forecast.htm',
       controller: 'forecastController'
   })
    .when('/forecast/:count', {
       templateUrl: 'pages/forecast.htm',
       controller: 'forecastController'
   })
    .when("/forecastBot", {
        templateUrl: "pages/forecastBot.htm",
        controller: 'forecastController'
   })
});