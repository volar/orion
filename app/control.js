angular.module('app').controller('Control', function($scope) {
  // data from form will go here
  $scope.formModel = {}; 
  
  // field definition here - could also pull from server
  $scope.fields = [
    {attr: 'firstName', label: 'First Name', required: true, type: 'text', required: true},
    {attr: 'lastName', label: 'Last Name', required: true, type: 'text'}
  ];
})