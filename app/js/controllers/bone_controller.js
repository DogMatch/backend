'use strict'

Meteor = require('Meteor');
Dogs = requrire('../../../meteor/dogmatch-meteor/dogmatch-meteor.js')

module.exports = function(app) {
  app.controller('boneCtrl', ['$scope', 'bbackend', '$collection', function($scope, bbackend, $collection) {
    
    Meteor.subscribe('Dogs');
    $scope.myModel = Dogs.find().fetch();
    $scope.startMatch = function() {
    return 'get ready for dogs! ' + $scope.myModel;
  };
  }]);
};
