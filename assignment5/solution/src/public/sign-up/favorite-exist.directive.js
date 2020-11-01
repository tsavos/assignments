(function() {
  'use strict';

  angular.module('public')
  .directive('favoriteExist',favoriteExist);

  favoriteExist.$inject = ['SignUpService'];
  function favoriteExist (SignUpService) {
      return {
          require: 'ngModel',
          link: function(scope, element, attrs, ngModel) {
              ngModel.$asyncValidators.favoriteExist = function(modelValue, viewValue) {
                return SignUpService.getFavoriteDish(viewValue).then(function(response) {
                  return response && response.data;
                });
              };
          }
      };
  }
})();
