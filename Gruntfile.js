"use strict"

module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    connect: {
        server: {
            options: {
                port: 9001,
                hostname: "localhost",
                base: '.',
                keepalive: false
            }
        }
    },
    watch: {
        options: {
            livereload: true,
        },
        livereload: {
            files: ['*.html', '*.css', '*.js']
        }
    },
  
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect', 'watch']);

};
