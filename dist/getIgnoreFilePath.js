/**
*
* getIgnoreFilePath.js - gets the .jshintignore or the .gitignore file of the project
*
**/
'use strict';

var path = require('path');

var checkForProjectFile = require('./checkForProjectFile.js'),
    formatHappyText = require('./formatHappyText'),
    formatAngryText = require('./formatAngryText');

module.exports = function (projectDir) {
	var jshintIgnore = checkForProjectFile(projectDir, '.jshintignore'),
	    defaultHintIgnore = checkForProjectFile(path.join(__dirname), '.jshintignore');

	//console.log(`fn: ${__filename}`);
	//console.log(`rps fn: ${fs.realpathSync(__filename)}`);
	//console.log(`path dirname: ${path.dirname(fs.realpathSync(__filename))}`);
	//console.log(`path join: ${path.join(path.dirname(fs.realpathSync(__filename)), '../configuration/.jshintignore')}`);
	//console.log(`path resolve: ${path.resolve(path.dirname(fs.realpathSync(__filename)), '../configuration/.jshintignore')}`);

	if (jshintIgnore) {
		console.log('\nFound .jshintignore file...');
		console.log('Using ' + formatHappyText(jshintIgnore) + ' as excludePath');

		return jshintIgnore;
	}

	console.log('\n' + formatAngryText('Didnt find a .jshintignore file locally'));
	console.log('Using ' + formatHappyText('default astro') + ' .jshintignore as exclude \n');
	console.log('Using ' + formatHappyText(defaultHintIgnore) + ' as excludePath');

	return defaultHintIgnore;
};