//CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    $scope.city = cityService.city;
    $scope.count = cityService.count;
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });
    $scope.$watch('count', function() {
       cityService.count = $scope.count; 
    });
    $scope.submit = function(c) {
        $location.path("/forecast/"+c); //c is being passed from home.html form submit
    };
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {
    $scope.city = cityService.city;
    $scope.numberOfResults = $routeParams.count;
    $scope.weatherResult = weatherService.getWeather($scope.city, $scope.numberOfResults);
    $scope.convertToCelcius = function(degK) {
        return Math.round(degK - 273.15)
    };
    $scope.formatDate = function(date) {
        return new Date(date * 1000) //since the date from api is in milli seconds. so from *10^-3 to *10^3(seconds)
    };
}]);