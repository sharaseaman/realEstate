myApp.controller('RentController', function (MainService) {
    console.log('in rent controller');

    var vm = this;
    vm.getList = function () {
        MainService.getRent();
        vm.rent = MainService.forRent;
    }
    // vm.rent = MainService.forRent.list
    // vm.rent = MainService.forRent;
    
    vm.getList();
    
});



