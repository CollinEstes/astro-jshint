/**
*
* buildArgs.js - processes the arguments provided
*
**/

'use strict';

var path = require('path'),
    fs = require('fs');

var getIgnoreFile = require('./getIgnoreFilePath'),
    getJsHintRcFilePath = require('./getJsHintRcFilePath'),
    formatAngryText = require('./formatAngryText');

function buildArgs(projectDir) {
	var args = [],
	    reporter = path.resolve(fs.realpathSync(__dirname), '../node_modules/jshint-stylish'),
	    excludeFilePath = getIgnoreFile(projectDir),
	    jshintrcFilePath = getJsHintRcFilePath(projectDir);

	args.push('--reporter=' + reporter);

	if (excludeFilePath !== undefined) {
		args.push('--exclude-path=' + excludeFilePath);
	} else {
		console.log('' + formatAngryText('Couldnt find exclude file ignoring from jshint call'));
	}

	args.push('--config=' + jshintrcFilePath);
	args.push('--verbose');

	// add projectDir as source
	args.push(projectDir);

	return args;
}

module.exports = buildArgs;