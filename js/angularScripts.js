var WeatherBigBrother = angular.module('WeatherBigBrother', []).controller('MapController', function($scope, $http){
    $scope.cityWeather = [];
    
    $scope.getWeatherForCity = function(city){
        $http.get('http://api.openweathermap.org/data/2.5/weather?q='+city)
            .success(function(data){
                 $scope.cityWeather = data;
         console.log(data);
        })
            .error(function(data){
                //GERER L'ERREUR ???
                 $scope.cityWeather = data;
        })
    };

});