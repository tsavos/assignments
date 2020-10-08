(function (){
  'use strict'

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.itemsList = ShoppingListCheckOffService.getToBuyList();
    toBuy.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };
  };

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.itemsList = ShoppingListCheckOffService.geAlreadyBoughtList()
  };

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuyList = [
      { name: "cookies", quantity: 10 },
      { name: "chips", quantity: 5 },
      { name: "ice creams", quantity: 3 }
      { name: "coca cola", quantity: 7 }
      { name: "marshmallows", quantity: 50 }
    ];
    var alreadyBoughtList = [];

    service.getToBuyList = function () {
      return toBuyList;
    };

    service.geAlreadyBoughtList = function () {
      return alreadyBoughtList;
    };

    service.buyItem = function (itemIndex) {
      var items = toBuyList.splice(itemIndex, 1);
      alreadyBoughtList.push(items[0]);
    };
  }
})();
