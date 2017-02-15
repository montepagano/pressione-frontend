app.controller('PressioneController', ['$http',function ($http) {
var vm= this;

    vm.clearPressione = function(){
           vm.pressione = {
               datamisurazione: null,
               diastolica: null,
               sistolica: null
           };
       };
    vm.init=function(){
        vm.clearPressione();
        vm.test="test";
        $http.get("http://localhost/pa/elenco.php")
                .then(function(response){
                        vm.response=response.data;
                    },vm.response);
            
};
    vm.init();
    vm.delete=function(id){
        $http.get("http://localhost/pa/elenco.php?act=del&id="+id)
                .then(function(response){
                        vm.response=response.data;
                    },vm.response);
    };
    
   
    vm.create=function(){
        
       $http({
           method:"POST",
           url:"http://localhost/pa/elenco.php",
           headers:{
               'Content-Type':"application/json"
           },
           data:vm.pressione
       })
            .then(function(response){
                     vm.response=response.data;
                 },vm.response);
      
    };

}]);
