console.log("client js");

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'cont'
    }).when('/rent', {
        templateUrl: 'views/rent.html',
        controller: 'RentController',
        controllerAs: 'cont'        
    }).when('/sale', {
        templateUrl: 'views/sale.html',
        controller: 'SaleController',
        controllerAs: 'cont'        
    }).when('/add', {
        templateUrl: 'views/add.html',
        // controller: 'AddController',
        // controllerAs: 'cont'  
    }).otherwise({ 
        redirectTo: '/home',
        templateUrl: '/views/home.html'
      });
    
    // this is only for removing #!
    // $locationProvider.html5Mode(true);
  });