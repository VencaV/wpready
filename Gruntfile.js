module.exports = function(grunt) {

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	less: {
		development: {
			options: {
				compress: false,
				sourceMap: true,
				sourceMapFilename: 'html/project/_ui/css/main.css.map',
				sourceMapURL: 'main.css.map',
				sourceMapRootpath: '/',
			},
			files: {
				'wp-content/themes/<%= pkg.templatename %>/css/main.css': 'wp-content/themes/<%= pkg.templatename %>/css/main.less',
				'wp-content/themes/<%= pkg.templatename %>/css/ie8.css': 'wp-content/themes/<%= pkg.templatename %>/css/ie8.less'
			}
		},
		production: {
				options: {
				compress: true
			},
			files: {
				'wp-content/themes/<%= pkg.templatename %>/style.css': 'wp-content/themes/<%= pkg.templatename %>/css/main.less',
				'wp-content/themes/<%= pkg.templatename %>/css/ie8.css': 'wp-content/themes/<%= pkg.templatename %>/css/ie8.less'
			}
		}
		},
		watch: {
			css: {
				files: [
					'wp-content/themes/<%= pkg.templatename %>/css/*.less',
					'wp-content/themes/<%= pkg.templatename %>/css/modules/*.less',
					'wp-content/themes/<%= pkg.templatename %>/bootstrap/less/*.less'
				],
				tasks: ['less:development']
			},
			js: {
				files: [
					'wp-content/themes/<%= pkg.templatename %>/js/modules/*.js'
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
					//'wp-content/themes/<%= pkg.templatename %>/js/modules/jquery-<%= pkg.jqueryversion %>.min.js',
					'wp-content/themes/<%= pkg.templatename %>/js/modules/main.js'
				],
				dest: 'wp-content/themes/<%= pkg.templatename %>/js/main.js',
			}
		},
		uglify: {
			options: {
				//
			},
			dist: {
				files: {
					'wp-content/themes/<%= pkg.templatename %>/js/main-min.js': ['wp-content/themes/<%= pkg.templatename %>/js/main.js']
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