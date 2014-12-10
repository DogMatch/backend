'use strict'

module.exports = function(app) {
  app.controller('boneCtrl', ['$scope', 'bbackend', function($scope, bbackend) {

    $scope.startMatch = function() {
    console.log('get ready for dogs!');
  };
  }]);
};
