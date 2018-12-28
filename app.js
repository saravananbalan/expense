
 var app = angular.module("dynamicFieldsPlugin", []);
 app.controller("dynamicFields", function($scope) {
   $scope.choices = [{id: 'choice1', name: 'choice1'}];  //, {id: 'choice2', name: 'choice2'}, {id: 'choice3', name: 'choice3'}
   $scope.addNewChoice = function() {
     var newItemNo = $scope.choices.length+1;
     $scope.choices.push({'id' : 'choice' + newItemNo, 'name' : 'choice' + newItemNo});
   };
   $scope.removeNewChoice = function() {
     var newItemNo = $scope.choices.length-1;
     if ( newItemNo !== 0 ) {
      $scope.choices.pop();
     }
   };
 
   $scope.showAddChoice = function($scope.choices) {
      choice.id === $scope.choices[$scope.choices.length-1].id;
  var total=0;
  angular.forEach($scope.choices , function(choice){
    total+= parseInt($scope.choices.value);
}
      return total;
   };

 });
