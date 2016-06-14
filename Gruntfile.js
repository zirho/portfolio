module.exports = function(grunt) {
	require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

  var path             = require('path');
	var webpack          = require('webpack');
	var webpackConfig    = require('./webpack.config.js');
	var webpackDevConfig = require('./webpack.config.dev.js');

	grunt.initConfig({
		webpack: {
			options: webpackConfig,
			build: {
				plugins: webpackConfig.plugins.concat(
					new webpack.DefinePlugin({
						'process.env': {
							'NODE_ENV': JSON.stringify('production')
						}
					}),
					new webpack.optimize.DedupePlugin(),
					new webpack.optimize.UglifyJsPlugin()
				)
			},
			'build-dev': {
				devtool: 'sourcemap',
				debug: true,
			}
		},
		'webpack-dev-server': {
			options: {
				webpack: webpackDevConfig,
			},
			start: {
				keepAlive: true,
        hot: true,
			}
		},
    eslint: {
      src: ['app/**/*.js']
    },
		watch: {
			app: {
				files: ['app/**/*', 'web_modules/**/*'],
				tasks: ['webpack:build-dev'],
				options: {
					spawn: false,
				}
			}
		}
	});

	grunt.registerTask('dev', ['webpack-dev-server:start']);

	grunt.registerTask('build', ['webpack:build']);

  grunt.loadNpmTasks("gruntify-eslint");
};
