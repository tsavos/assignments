(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'restaurantBaseUrl'];
function MenuDataService($http, restaurantBaseUrl) {
  var ctrl = this;

  ctrl.getAllCategories = function() {
    return $http({url: restaurantBaseUrl + '/categories.json'})
    .then(function(result) {
      return result.data;
    });
  };

  ctrl.getItemsForCategory = function(categoryShortName) {
    return $http({url: restaurantBaseUrl + '/menu_items.json?category=' + categoryShortName})
    .then(function(result) {
      return result.data;
    });
  };
}

})();
