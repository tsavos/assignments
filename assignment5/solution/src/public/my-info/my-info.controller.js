(function() {
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['SignUpService', 'ApiPath'];
  function MyInfoController(SignUpService, ApiPath) {
      var ctrl = this;
      ctrl.basePath = ApiPath;
      ctrl.getSignUpInfo = function() {
        var signUpInfo = SignUpService.getSignUpInfo();
        if(signUpInfo){
          SignUpService.getFavoriteDish(signUpInfo.favoritedish).then(function(response) {
              signUpInfo.favoriteItem = response.data;
          });
          return signUpInfo
        }
      };
      ctrl.signUpInfo = ctrl.getSignUpInfo();
  }
})();
