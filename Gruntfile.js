module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            options: {
                mangle: true
            },
            my_target: {
                files: [
                    {
                        src: 'public/javascripts/**/*.js',
                        dest: 'public/javascripts/minify/app.min.js'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
}