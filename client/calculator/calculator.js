angular.module('angular-spa.calculator', [])

.controller('CalculatorController', function ($scope) {
  $scope.result = function() {
           if ($scope.operator == '+') {
               return $scope.a + $scope.b;
           }
           if ($scope.operator == '-') {
               return $scope.a - $scope.b;
           }
           if ($scope.operator == '*') {
               return $scope.a * $scope.b;
           }
           if ($scope.operator == '/') {
               return $scope.a / $scope.b;
           }
       };
       $scope.name = 'HomeController';
   });
