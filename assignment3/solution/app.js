(function (){
  'use strict'

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctl = this;
    ctl.message = 'Nothing found';
    ctl.searchTerm = '';
    ctl.getMenuItems = function (searchTerm) {
      MenuSearchService.getMatchedMenuItems(searchTerm).then(function (result) {
        ctl.found = result;
      });
    };
    ctl.onRemove = function (index) {
      ctl.found.splice(index, 1);
    };
  };

  MenuSearchService.$inject = ['$q', '$http'];
  function MenuSearchService($q, $http) {
    var srv = this;
    srv.getMatchedMenuItems = function(searchTerm) {
      return $http({url:'https://davids-restaurant.herokuapp.com/menu_items.json'}).then(function(result) {
        // process result and only keep items that match
        var foundItems = $q.defer();
        var items = [];
        if(searchTerm.length>0){
          for (var i = 0; i < result.data.menu_items.length; i++) {
            if(result.data.menu_items[i].description.indexOf(searchTerm) !== -1) {
              items.push(result.data.menu_items[i]);
            }
          }
        }
        foundItems.resolve(items);

        // return processed items
        return foundItems.promise;
    });
  };
};

function FoundItemsDirective() {
  var ddo = {
    restrict: 'E',
    templateUrl: 'foundItems.tmpl.html',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    transclude: true
  };
  return ddo;
};
  })();
