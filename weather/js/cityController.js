//(function () {
//    'use strict';
app.controller('CityController', CityController);
    function CityController($http, $state) {
        var vm = this;
        vm.isVisible = true;
        var id =  $state.params.id;
        $http.get('http://api.openweathermap.org/data/2.5/forecast?id='+id+'&appid=b3f64ee85d593373bc785bc864536ca7')
        .then(function(res){
                if(res.status !== 200){
                    console.log('error');
                    return;
                }
                vm.showList = [res.data.list[0]];
                res.data.list.forEach(function(item){
                    if(item.dt_txt.indexOf('12:00:00') > -1){
                        vm.showList.push(item);
                    }
                });
                console.log(vm.showList);
                vm.isVisible = false;
            })
        vm.getTemperature = function(data){
            return Math.round(data);
        }
        vm.isToday = function(data){
            var today = new Date().getDate();
            var todayFormatted = today > 10 ? '-'+today : '-0'+today;
            if(data.indexOf(todayFormatted) > -1){
                return 'selected';
            }
            return '';
        }
    }
//})();