
app.controller('MainController', ['$scope', function($scope) {
      $scope.title = 'Number Enlargement';
      $scope.buttonValue = 0;
      $scope.multiplier = 1;
      $scope.plusOne = function() {
        $scope.buttonValue += 1;
      };
      
      $scope.multiply = function(multiplierString) {
        $scope.buttonValue *= parseInt($scope.multiplier);
      };
      
      $scope.clear = function() {
        $scope.buttonValue = 0;
        $scope.multiplier = 1;
      };

      
}]);
