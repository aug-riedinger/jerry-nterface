module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['*.js'],
        tasks: ['default'],
        options: {
          nospawn: true
        }
      }
    },
    develop: {
      server: {
        file: 'server.js'
      }
    },
    nodemon: {
      dev: {
        options: {
          file: 'server.js',
          debug: true,
          delayTime: 1
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-develop');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('default', ['develop', 'watch']);
  grunt.registerTask('start', ['concurrent']);

};