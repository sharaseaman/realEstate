myApp.service('MainService', function ($http) {
  console.log('in MainService');

  var self = this;

  self.forSale = { list: [] };
  self.forRent = { list: [] };


  //initial function to get all messages
  self.getSale = function () {
    $http({
      method: 'GET',
      url: '/sale'
    }).then(function (response) {
      console.log(response.data);
      self.forSale.list = response.data;
    });
  }; //end of get


  self.getRent = function () {
    $http({
      method: 'GET',
      url: '/rent'
    }).then(function (response) {
      console.log(response.data);
      self.forRent.list = response.data;
    });
  };
});