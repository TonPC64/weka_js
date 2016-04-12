/* global angular */
angular.module('wekaApp', [])
  .controller('wekaCtrl', function ($scope, $http) {
    $scope.post = function () {
      var data = "'x','s','y','t','a','f','c','b','k','e','c','s','s','w','w','p','w','o','p','n','n','g',?"
      $http.post('/data', {data: data}).success((req, res) => {
        $scope.data = req
      })
    }

    $scope.post2 = function () {
      var data = "'x','s','n','t','p','f','c','n','k','e','e','s','s','w','w','p','w','o','p','k','s','u',?"
      $http.post('/data', {data: data}).success((req, res) => {
        $scope.data = req
      })
    }
  })
