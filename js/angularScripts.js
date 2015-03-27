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
    
    $scope.toCelsius = function(temp) {
        return ((temp - 32) * 5.0/9.0);
    };
    
    $scope.toKMH = function(speed) {
        return (speed * 3,6);
    }
    
    $scope.coordPoint = function(point, pos) {
        if(pos == 'top') {
            if(typeof point.top !== 'undefined') {
                return (point.top+'%');
            }
            else {
                return 'auto';
            }
        }
        
        if(pos == 'bottom') {
            if(typeof point.bottom !== 'undefined') {
                return (point.bottom+'%');
            }
            else {
                return 'auto';
            }
        }
        
        if(pos == 'right') {
            if(typeof point.right !== 'undefined') {
                return (point.right+'%');
            }
            else {
                return 'auto';
            }
        }
        
        if(pos == 'left') {
            if(typeof point.left !== 'undefined') {
                return (point.left+'%');
            }
            else {
                return 'auto';
            }
        }
    };
});