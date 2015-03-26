var WeatherBigBrother = angular.module('WeatherBigBrother', []).controller('MapController', function($scope, $http){
    
    $scope.points = [
        {city:'Paris,fr', top:33, left:46},
        {city:'New York,us', top:37, left:27},
      ];
    
    $scope.cityWeather = [];
    
    $scope.getWeatherForCity = function(city){
        console.log(city);
        $http.get('http://api.openweathermap.org/data/2.5/weather?q='+city)
            .success(function(data){
                 $scope.cityWeather = data;
                 $('#modalWeatherForCity').modal('show');
        })
            .error(function(data){
                //GERER L'ERREUR ???
                 $scope.cityWeather = data;
        })
    };

});