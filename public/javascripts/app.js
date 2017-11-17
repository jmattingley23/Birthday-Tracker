angular.module('birthdaytracker', [])
.controller('MainCtrl', [
  '$scope', '$http',
  function($scope, $http) {
    $scope.birthdays = [];

    $scope.addBirthday = function() {
      if($scope.name === '' || $scope.date === '') {
        return;
      }
      $scope.create({
        name: $scope.name
        date: $scope.date,
      });
      $scope.formContent = '';
    }

    $scope.getAll = function() {
      return $http.get('/birthdays').success(function(data) {
        angular.copy(data, $scope.birthdays);
      });
    }
    $scope.getAll();

    $scope.create = function(birthday) {
      return $http.post('/birthdays', birthday).success(function(data) {
        $scope.birthdays.push(data);
      });
    }
  }
]);
