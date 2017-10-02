myApp.controller('SaleController', function(MainService) {
    console.log('in sale controller');
   
   var vm = this;

  vm.getList = function (){
      MainService.getSale();
      vm.sale = MainService.forSale;
      console.log('vm get list sale controller', vm.sale);
      
  };
  vm.getList();

});