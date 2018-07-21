angular.module('angular-spa', [
  'angular-spa.calculator',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './calculator/calculator.html',
    controller: 'CalculatorController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
