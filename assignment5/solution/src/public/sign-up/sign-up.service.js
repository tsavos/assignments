(function() {
  'use strict';

  angular.module('public')
  .service('SignUpService', SignUpService);

  SignUpService.$inject = ['$http','$q','ApiPath'];
  function SignUpService($http, $q, ApiPath) {
    var srv = this;
    srv.signUpInfo = null;

    srv.addSignUpInfo = function(signUpInfo) {
      if(signUpInfo) {
        srv.signUpInfo = signUpInfo;
        return true;
      } else {
        return false;
      }
    };

    srv.getSignUpInfo = function() {
      return srv.signUpInfo;
    };

    srv.getFavoriteDish = function(shortName) {
      return $http.get(ApiPath + '/menu_items.json').then(function(response) {
          if(shortName && response && response.data){
            for (var i in response.data.menu_items) {
              if (response.data.menu_items[i].short_name && response.data.menu_items[i].short_name === shortName) {
                return {data: response.data.menu_items[i]};
              }
            }
          }
          return $q.reject("Favorite dish not found!");
      });
    };
  }
})();
