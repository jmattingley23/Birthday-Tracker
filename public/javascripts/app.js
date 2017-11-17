angular.module('birthdaytracker', [])
.controller('MainCtrl', [
  '$scope', '$http',
  function($scope, $http) {
    $scope.birthdays = [];

    $scope.addBirthday = function() {
      console.log('add birthday');
      if($scope.name === '' || $scope.date === '') {
        return;
      }
      $scope.create({
        name: $scope.name
        date: $scope.date,
      });
      $scope.name = '';
      $scope.date = '';
    }

    $scope.create = function(birthday) {
      console.log('create');
      return $http.post('/birthdays', birthday).success(function(data) {
        $scope.birthdays.push(data);
      });
    }

    $scope.getAll = function() {
      return $http.get('/birthdays').success(function(data) {
        angular.copy(data, $scope.birthdays);
      });
    }
    $scope.getAll();
  }
]);
