/* global angular, $ */
angular.module('wekaApp', ['ui.materialize'])
  .controller('wekaCtrl', function ($scope, $http) {
    $http.get('js/data.json').success((req, res) => {
      $scope.formData = req
      $scope.labels = Object.keys(req)
    })
    $scope.form = ['x', 's', 'y', 't', 'a', 'f', 'c', 'b', 'k', 'e', 'c', 's', 's', 'w', 'w', 'p', 'w', 'o', 'p', 'n', 'n', 'g']
    $scope.post = function () {
      $scope.showModel = false
      $scope.data = "'" + $scope.form.join("','") + "',?"
      $http.post('/data', {data: $scope.data}).success((req, res) => {
        var result = req[2].split(' ').filter((item) => item !== '')
        answer(result)
      })
    }

    var answer = function (res) {
      $scope.resRe = res[3]
      var imgres = res[2].split(':')
      if (imgres[1] === 'e') {
        $('h4#modalH').removeClass('red-text')
        $('h4#modalH').addClass('green-text')
        $scope.resImg = 'img/edible.jpg'
      } else if (imgres[1] === 'p') {
        $('h4#modalH').removeClass('green-text')
        $('h4#modalH').addClass('red-text')
        $scope.resImg = 'img/poison.jpg'
      }
      $scope.showModel = true
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
  })

$(document).ready(function () {
  $('select').material_select()
})

$(document).ready(function () {
  $('.modal-trigger').leanModal()
})
