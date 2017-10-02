myApp.controller('HomeController', function(MainService) {
    console.log('in home controller');
    var vm = this;
    vm.getList = function () {
        console.log("in the getList")
       
        MainService.getRent();
        vm.rent = 
        MainService.forRent.list;
        MainService.getSale();
        vm.sales = MainService.forSale.list;
    };
 });