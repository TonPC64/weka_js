/* global angular */
angular.module('wekaApp', ['ui.materialize'])
  .controller('wekaCtrl', function ($scope, $http) {
    $scope.cap_shape = [
      {name: 'bell', value: 'b'},
      {name: 'conical', value: 'c'},
      {name: 'convex', value: 'x'},
      {name: 'flat', value: 'f'},
      {name: 'knobbed', value: 'k'},
      {name: 'sunken', value: 's'}
    ]
    $scope.odor = [
      {name: 'almond', value: 'a'},
      {name: 'anise', value: 'l'},
      {name: 'creosote', value: 'c'},
      {name: 'fishy', value: 'y'},
      {name: 'foul', value: 'f'},
      {name: 'musty', value: 'm'},
      {name: 'none', value: 'n'},
      {name: 'pungent', value: 'p'},
      {name: 'spicy', value: 's'}
    ]

    $scope.form = ['x', 's', 'y', 't', 'a', 'f', 'c', 'b', 'k', 'e', 'c', 's', 's', 'w', 'w', 'p', 'w', 'o', 'p', 'n', 'n', 'g']
    $scope.post = function () {
      $scope.data = "'" + $scope.form.join("','") + "',?"
      $http.post('/data', {data: $scope.data}).success((req, res) => {
        $scope.result = req
      })
    }
  })

$(document).ready(function () {
  $('select').material_select()
})
