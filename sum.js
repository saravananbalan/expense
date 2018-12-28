app.controller('MainCtrl', function($scope) {
  $scope.items = [ { value: 1 }, { value: 2 }, { value: 5}, { value: 7 } ];
 $scope.sum = function(list) {
  var total=0;
  angular.forEach(list , function(item){
    total+= parseInt(item.value);
  });
  return total;
 }

});
