(function() {
  'use strict';

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['SignUpService'];
  function SignUpController(SignUpService) {
    var ctrl = this;

    ctrl.signUpData = {};
    ctrl.signUp = function() {
      ctrl.added = SignUpService.addSignUpInfo(ctrl.signUpData);
    };
  }
})();
