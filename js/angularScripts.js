var WeatherBigBrother = angular.module('WeatherBigBrother', []).controller('MapController', function($scope, $http){
    
    $scope.points = [
        {city:'Paris,fr', top:33, left:45.8},
        {city:'Madrid,es', top:37.1, left:44.14},
        {city:'London_uk', top:30.35, left:45},
        {city:'Berlin_de', top:31.65, left:47.47},
      ];
    
    $scope.cityWeather = [];

    jQuery(document).ready(function($) {
        var query = window.location.href;
        var vars = query.split("#");
        var flag = 0;
        (vars[1] >= 0 && vars[1] <= $(".moreInfo").size()) ? goTo(vars[1]) : goTo(0);
        $( ".moreInfo" ).click(function() { 
            if(flag == 1) {return false;}
            $(".moreInfo").removeClass("active");
            $(this).addClass("active")
            flag = 1;
            $( ".slide" ).animate({right:'+=100%'}, "slow", function(){
                flag = 0;
            });
        });
    function goTo(nb){
            $( ".slide" ).css( "margin-left", - (nb * $("#setup").width()) +"px");
            $(".moreInfo").removeClass("active");
            $('.moreInfo:nth('+nb+')').addClass("active");
            
        }
    });
    
    var displayWeather = function() {
        var deg = $scope.cityWeather.wind.deg;
        $('#windDirection').css({
            '-ms-transform': 'rotate('+deg+'deg)',
            '-webkit-transform': 'rotate('+deg+'deg)',
            '-transform': 'rotate('+deg+'deg)' 
        });
        $('#modalWeatherForCity').modal('show');
    }
    
    $scope.getWeatherForCity = function(city){
        console.log(city);
        $http.get('http://api.openweathermap.org/data/2.5/weather?q='+city)
            .success(function(data){
                 $scope.cityWeather = data;
                 displayWeather();
        })
            .error(function(data){
                //GERER L'ERREUR ???
                 $scope.cityWeather = data;
        })
    };
    
    $scope.toCelsius = function(temp) {
        return (temp - 272.15).toFixed(1);
    };
    
    $scope.toKMH = function(speed) {
        return (speed * 3.6).toFixed(1);
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