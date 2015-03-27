var WeatherBigBrother = angular.module('WeatherBigBrother', []).controller('MapController', function($scope, $http){
    
    $scope.points = [
        {city:'Paris,fr', top:33, left:45.8},
        {city:'Madrid,es', top:37.1, left:44.14},
        {city:'London_uk', top:30.35, left:45},
        {city:'Berlin_de', top:31.65, left:47.47},
        {city:'Moscow_ru', top:30.3, left:56.6},
        {city:'Saint_Petersburg', top:26.36, left:54.14},
        {city:'New York,us', top:38.4, left:27.4},
        {city:'Washington,us', top:42.3, left:25.8},
        {city:'Chicago,us', top:37.1, left:23.3},
        {city:'Los_Angeles,us', top:43.7, left:14},
        {city:'Vancoucer,ca', top:34.42, left:12.41},
        {city:'Mexico,me', top:50.4, left:19.1},
        {city:'Caracas,ve', top:57.1, left:27.4},
        {city:'Bogota,co', top:61.1, left:25.8},
        {city:'Lima,pe', top:66.5, left:24.9},
        {city:'Sao_Paulo,bra', top:71.87, left:34.12},
        {city:'Santiago,chile', top:77.21, left:26.6},
        {city:'Buenos_Aires,ar', top:50, left:50},

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