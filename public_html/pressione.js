app.controller('PressioneController', ['$http',function ($http) {
var vm= this;
vm.test="test";
vm.init=function(){
    $http.get("http://localhost/pa/elenco.php")
            .success(function(data){console.log(data);})
            .error(function(data){console.log("error:");console.log(data);});
};

vm.init();
}]);

