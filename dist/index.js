/**
*
* astro-jshint: astro-cli module that executes jshint against a user's current working directory
*
**/
'use strict';

var path = require('path'),
    fs = require('fs');

var buildArgs = require('./buildArgs'),
    formatHappyText = require('./formatHappyText');

module.exports = function (projectDir, options) {
	var args = buildArgs(projectDir, options),
	    cmd = path.resolve(fs.realpathSync(__dirname), '../node_modules/.bin/jshint');

	console.log(formatHappyText('\t\t\t▲,▲,▼,▼,◄,►,◄,►,(B),(A),[Start]\t\t\t') + ' \n');

	//setup
	return { cmd: cmd, args: args };
};