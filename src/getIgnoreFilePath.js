/**
*
* getIgnoreFilePath.js - gets the .jshintignore or the .gitignore file of the project
*
**/
var path = require('path')
	, fs = require('fs')
	;

var checkForProjectFile = require('./checkForProjectFile.js');

function getDefault () {
	return path.join(path.dirname(fs.realpathSync(__filename)), '../defaults/.jshintignore');
}

module.exports = function (projectDir) {
	var jshintIgnore = checkForProjectFile(projectDir, '.jshintignore')
		, gitIgnore = checkForProjectFile(projectDir, '.gitignore')
		;

	if (jshintIgnore) {
		return jshintIgnore;
	}

	if (gitIgnore) {
		return gitIgnore;
	}

	return getDefault();
}