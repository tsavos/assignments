(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope']
  function LunchCheckController($scope){
    $scope.lunchItems = '';
    $scope.message = '';
    $scope.msgClass = '';
    $scope.lunchCheck = function(){
            if($scope.lunchItems === ''){
              $scope.message = 'Please enter data first';
              $scope.msgClass = 'msgRed';
              $scope.txtClass = 'txtRed';
            } else {
              var count = 0;
              var items = $scope.lunchItems.split(',');
              for (var i = 0; i < items.length; i++) {
                if(items[i].trim() != '') {
                  count += 1;
                }
              }

              if(count <= 3) {
                $scope.message = 'Enjoy!';
              } else {
                $scope.message = 'Too much!';
              }
              $scope.msgClass = 'msgGreen';
              $scope.txtClass = 'txtGreen';
            }
            return $scope.message;
          };
  };
})();
