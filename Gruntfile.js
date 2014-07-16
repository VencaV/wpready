module.exports = function(grunt) {

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	less: {
		development: {
			options: {
				yuicompress: false
			},
			files: {
				'wp-content/themes/medio/css/main.css': 'wp-content/themes/medio/css/main.less',
				'wp-content/themes/medio/css/ie8.css': 'wp-content/themes/medio/css/ie8.less'
			}
		},
		production: {
				options: {
				yuicompress: true
			},
			files: {
				'wp-content/themes/medio/style.css': 'wp-content/themes/medio/css/main.less',
				'wp-content/themes/medio/css/ie8.css': 'wp-content/themes/medio/css/ie8.less'
			}
		}
		},
		watch: {
			css: {
				files: [
					'wp-content/themes/medio/css/*.less',
					'wp-content/themes/medio/css/modules/*.less',
					'wp-content/themes/medio/bootstrap/less/*.less'
				],
				tasks: ['less:development']
			},
			js: {
				files: [
					'wp-content/themes/medio/js/modules/*.js'
				],
				tasks: ['compile-js']
			}
		},
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: [
					//'wp-content/themes/medio/js/modules/jquery-<%= pkg.jqueryversion %>.min.js',
					'wp-content/themes/medio/js/modules/main.js'
				],
				dest: 'wp-content/themes/medio/js/main.js',
			}
		},
		uglify: {
			options: {
				//
			},
			dist: {
				files: {
					'wp-content/themes/medio/js/main-min.js': ['wp-content/themes/medio/js/main.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['compile-js','less:development','watch']);
	grunt.registerTask('compile-js', ['concat','uglify']);
	grunt.registerTask('compile-css', ['less:production']);
	grunt.registerTask('compile', ['compile-js','less:production']);

};