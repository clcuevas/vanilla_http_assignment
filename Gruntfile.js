'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    jshint: {
      dev: {
        src: ['*.js', 'lib/**/*.js', 'test/**/*.js']
      },
      options: {
        jshintrc: '.jshintrc'
      }
    },
    jscs: {
      dev: {
        src: ['<%= jshint.dev.src %>']
      }
    },
    simplemocha: {
      dev: {
        src: ['test/**/*.js']
      }
    },
    watch: {
      app: {
        files: ['<%= jshint.dev.src %>', '<%= simplemocha.dev.src %>'],
        tasks: ['jshint', 'simplemocha']
      }
    }
  });//end grunt initConfig

  grunt.registerTask('test', ['jshint:dev', 'jscs:dev']);
  //grunt.registerTask('test2', ['jscs:dev']);
  grunt.registerTask('mocha', ['simplemocha:dev']);
  grunt.registerTask('default', ['test','mocha', 'watch']);
};