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

function buildArgs (projectDir) {
	var args = []
		, reporter = path.resolve(fs.realpathSync(__dirname), '../node_modules/jshint-stylish')
		, excludeFilePath = getIgnoreFile(projectDir)
		,	jshintrcFilePath = getJsHintRcFilePath(projectDir)
		;
	// currently there are no additional options available for this module

	args.push(`--reporter=${reporter}`);

	args.push(`--exclude-path=${excludeFilePath}`);
	args.push(`--config=${jshintrcFilePath}`);
	args.push(`--verbose`);

	// add projectDir as source
	args.push(projectDir);

	return args;
}

module.exports = buildArgs;