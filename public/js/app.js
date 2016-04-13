/* global angular, $ */
angular.module('wekaApp', ['ui.materialize'])
  .controller('wekaCtrl', function ($scope, $http) {
    $http.get('js/data.json').success((req, res) => {
      $scope.formData = req
      $scope.labels = Object.keys(req)
    })
    $scope.form = ['x', 's', 'y', 't', 'a', 'f', 'c', 'b', 'k', 'e', 'c', 's', 's', 'w', 'w', 'p', 'w', 'o', 'p', 'n', 'n', 'g']
    $scope.post = function () {
      $scope.data = "'" + $scope.form.join("','") + "',?"
      $http.post('/data', {data: $scope.data}).success((req, res) => {
        $scope.result = req
      })
    }

    // var tranfrom = function (str) {
    //   str = str.split(',')
    //   var emp = ''
    //   var gg = str.forEach(item => {
    //     var temp = item.split('=')
    //     emp += '{' + ['"name":"' + temp[0] + '"', '"value":"' + temp[1] + '"'].join(',') + '},'
    //   })
    //
    //   return emp
    // }

  // % 9. Class Distribution:
  // %     --    edible: 4208 (51.8%)
  // %     -- poisonous: 3916 (48.2%)
  // %     --     total: 8124 instances
  })

$(document).ready(function () {
  $('select').material_select()
})
