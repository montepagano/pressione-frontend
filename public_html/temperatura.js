app.controller('TemperaturaController', ['$http',function ($http) {
var vm= this;

    vm.clearTemperatura = function(){
           vm.temperatura = {
               datamisurazione: null,
               valore: null
              
           };
       };
    vm.init=function(){
        vm.clearTemperatura();
        vm.test="test";
        $http.get("http://localhost/pa/temperatura.php")
                .then(function(response){
                        vm.response=response.data.list;
                        vm.message=response.data.error;
                    },vm.response,vm.message);
            
};
    vm.init();
    vm.delete=function(id){
        $http.get("http://localhost/pa/temperatura.php?act=del&id="+id)
                .then(function(response){
                        vm.response=response.data.list;
                        vm.message=response.data.error;
                    },vm.response,vm.message);
    };
    
   
    vm.create=function(){
        
       $http({
           method:"POST",
           url:"http://localhost/pa/temperatura.php",
           headers:{
               'Content-Type':"application/json"
           },
           data:vm.temperatura
       })
            .then(function(response){
                     vm.response=response.data.list;
                     vm.message=response.data.error;
                 },vm.response,vm.message);
      
    };

}]);