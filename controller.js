angular.module('myAngularApp', []);
var equation = '';
var fullEquation = '';

angular.module('myAngularApp').controller('AppController', function($scope){
  $scope.display = '';
  $scope.history = [];
  $scope.putChar = function(num){
    equation += num;
    $scope.display = equation;
  }
  $scope.solveEquation = function(){
    $scope.display = math.eval(equation);
    fullEquation = equation + '=' + math.eval(equation);
    $scope.history.unshift(fullEquation);
    equation = '';
  }
  $scope.squareRoot = function(){
    $scope.display = math.sqrt(math.eval(equation));
    fullEquation = '√' + equation + '=' + math.sqrt(math.eval(equation));
    $scope.history.unshift(fullEquation);
    equation = '';
  }
  $scope.clearDisplay = function(){
    $scope.display = '';
    equation = '';
  }
})
