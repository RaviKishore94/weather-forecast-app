//SERVICES
weatherApp.service('cityService', function() {
   this.city = 'Bangalore';
   this.count = '2';
});

weatherApp.service('weatherService', ["$resource", function($resource) {
    this.getWeather = function(city, numberOfResults) {
        var weatherApi = $resource("http://api.openweathermap.org/data/2.5/forecast");
        return weatherResult = weatherApi.get({ q: city, cnt: numberOfResults , appid: "e749a4f33d9c02f717359ecaf326a15f"});
    }
}]);