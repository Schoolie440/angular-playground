
app.controller('MainController', ['$scope', function($scope) {
      $scope.title = 'Number Enlargement';
      $scope.buttonValue = 0;
      $scope.multiplier = 1;
      $scope.plusOne = function() {
        $scope.buttonValue += 1;
      };
      
      $scope.multiply = function() {
        $scope.buttonValue *= parseInt($scope.multiplier);
      };
      
      $scope.clear = function() {
        $scope.buttonValue = 0;
        $scope.multiplier = 1;
      };
      

      
      $scope.listInfo = {
        textField: $scope.textField,
        savedText: 'cheese',
        
        saveText: function () {
          savedText = 'pizza';
          console.log(savedText);
        }
        
        
      };
      
       
      
}]);