/**
*
* buildArgs.js - processes the arguments provided
*
**/

var path = require('path')
	, fs = require('fs')
	;

var getIgnoreFile = require('./getIgnoreFilePath');

function buildArgs (projectDir, options) {
	var args = []
		, reporter = path.join(path.dirname(fs.realpathSync(__filename)), '../node_modules/jshint-stylish')
		, excludePath = getIgnoreFile(projectDir);
	// currently there are no additional options available for this module

	// add stylish reporter
	args.push('--reporter=' + reporter);

	// add exclude path
	args.push('--exclude-path=' + excludePath);

	// add projectDir as source
	args.push(projectDir);

	return args;
}

module.exports = buildArgs;