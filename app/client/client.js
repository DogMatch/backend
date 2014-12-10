'use strict';

require('angular/angular');
require('angular-route');

var mmmApp = angular.module('boneApp');
//services
require('./services/bbackend.js')(boneApp);

//controllers
require('./controllers/bonectlr.js')(boneApp);

boneApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '',
    controller:'boneCtlr'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
