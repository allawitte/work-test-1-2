//Moscow: 524901
//Saint Petersburg: 498817
//Yekaterinburg: 1486209
//icons: https//openweathermap.org/img/w/
//kelvin: 273.15
//APPID:  b3f64ee85d593373bc785bc864536ca7

var app = angular.module("weatherApp", ['ui.router']);
app.controller("mainController", mainController);
function mainController($timeout, $window) {
    var vm = this;
    vm.topClass = '';
    var updateCounter = function () {
        var date = new Date();
        vm.hours = date.getHours() > 10 ? date.getHours() : '0'+date.getHours();
        vm.minutes = date.getMinutes() > 10 ? date.getMinutes() : '0'+date.getMinutes();
        vm.seconds = date.getSeconds() > 10 ? date.getSeconds() : '0'+date.getSeconds();
        $timeout(updateCounter, 1000);
    };
    updateCounter();
    angular.element($window).bind("scroll", function() {
        if(this.pageYOffset > 40){
            vm.topClass = 'scrolled';
        }
        else {
            vm.topClass = '';
        }
    });
};

