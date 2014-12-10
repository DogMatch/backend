"use strict";

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    jshint: {
      all: ['app/*.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: 'app/**/*.js',
      options: {
        config: '.jscsrc'
      }
    },

    simplemocha: {
      src: ['test/mean_median_mode_tests.js']
    },

    clean: {
      sre: ['build/']
    },

    copy: {
      dev:{
        cwd: 'app/',
        expand: true,
        src: ['**/*.html'],
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src:['app/js/**/*.js'],
        dest: 'build/client_bundle.js',
        options: {
          transform: ['debowerify']
        }
      },

      test: {
        src: ['test/client/**/*.js'],
        dest: 'test/angular_testbundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    },

    karma: {
      unit: {
        configFile: 'karma.config.js'
      },

      continuous: {
        configFile: 'karma.config.js',
        singleRun: false,
        browsers: ['PhantomJS']
      }
    },

    sass: {
      dist: {
        files: {
          'stylesheets/app.css': 'sass/app.sass',
          'stylesheets/other-app.css': 'sass/app.scss'
        }
      }
    },

    watch: {
      sass: {
        files: ['sass/**/*.sass', 'sass/**/*.scss'],
        tasks: ['sass']
      },
      livereload: {
        files: ['stylesheets/*.css'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.registerTask('build', ['jshint', 'clean', 'browserify:dev', 'copy:dev']);
  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha']);
  grunt.registerTask('test:client', ['browserify:test', 'karma:unit']);
  grunt.registerTask('default', ['test', 'sass']);
};
