var nodemailer = require('nodemailer');
module.exports = function(grunt) {

    grunt.initConfig({

        babel: {
            options: {
                sourceMap: true,
                presets: ['babel-preset-es2015']
            },
            dist: {
                files: {
                    'dist/proxy.js': 'proxy.js'
                }
            }
        },
            uglify: {
                dist: {
                    files: {
                        'dist/proxy.min.js': ['dist/proxy.js']
                    }
                }     
            },
        nodemailer: {
            options: {
                transport: {
                    type: 'SMTP',
                    options: {
                        service: 'Gmail',
                        auth: {
                            name: 'YOUR_NAME',
                            user: 'YOUR_USERNAME',
                            pass: 'YOUR_PASSWORD'
                        }
                    }
                },
                recipients: [
                    {
                        email: 'garry@lachman.co',
                        name: 'Garry'
                    },
                    {
                        email: 'alon.ghelber@biscience.com',
                        name: 'Alon'
                    }
                ]
            },
            dist: {
                src: ['mail-body.html']
            }
        },
        execute: {
            target: {
                src: ['dist/proxy.min.js']
            }
        }

    });



    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-nodemailer');
    grunt.loadNpmTasks('grunt-execute');

    grunt.registerTask('default', ['babel','uglify','nodemailer','execute']);

};
