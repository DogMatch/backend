'use strict';

module.exports = function(app) {
  app.factory('bbackend', function() {
    return function(scope, fn) {
        var comp = Deps.autorun(function(c) {
          fn(c);

          // this is run immediately for the first call
          // but after that, we need to $apply to start Angular digest
          if (!c.firstRun) setTimeout(function() {
            // wrap $apply in setTimeout to avoid conflict with
            // other digest cycles
            scope.$apply();
          }, 0);
        });

        // stop autorun when scope is destroyed
        scope.$on('$destroy', function() {
          comp.stop();
        });

        // return autorun object so that it can be stopped manually
        return comp;
      };
    });
  };
