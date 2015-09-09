/**
*
* buildArgs.js - processes the arguments provided
*
**/

var path = require('path')
	, fs = require('fs')
	;

var getIgnoreFile = require('./getIgnoreFilePath')
	,	getJsHintRcFilePath = require('./getJsHintRcFilePath')
	;

function buildArgs (projectDir, options) {
	var args = []
		, reporter = path.resolve(fs.realpathSync(__dirname), '../node_modules/jshint-stylish')
		, excludePath = getIgnoreFile(projectDir)
		,	configPath = getJsHintRcFilePath(projectDir)
		;
	// currently there are no additional options available for this module

	// add stylish reporter
	args.push(`--reporter=${reporter}`);

	// add exclude path
	args.push(`--exclude-path=${excludePath}`);

	args.push(`--config=${configPath}`);

	// add projectDir as source
	args.push(projectDir);

	return args;
}

module.exports = buildArgs;