module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compass: {
            dist: {
              options: {
                config: 'config.rb'
              }
            },
        },

        watch: {
            css: {
                files: ['**/*.scss'],
                tasks: ['compass:dist'],
                options: {
                    spawn: false,
                }
            }            
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['compass']);
};