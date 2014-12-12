'use strict';

require('angular/angular');
require('angular-route');
require('angular-meteor');

var mmmApp = angular.module('boneApp');
//services
require('./services/bbackend.js')(mmmApp);

//controllers
require('./controllers/bonectlr.js')(mmmApp);

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
