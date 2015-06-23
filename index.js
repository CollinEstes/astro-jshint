/**
*
* astro-jshint: astro-cli module that executes jshint against a user's current working directory
*
**/
'use strict';

var buildArgs = require('./src/buildArgs');

module.exports = function (projectDir, options) {
	var args = buildArgs(projectDir, options);

	//setup
	return { cmd: 'jshint', args: args };
}