angular.module('birthdaytracker', [])
.controller('MainCtrl', [
  '$scope',
  function($scope) {
    $scope.addComment = function() {
      $scope.formContent='';
    }
  }
]);
