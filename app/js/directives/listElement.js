
app.directive('listElement', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/listElement.html'
  };
});

