/**
*
* getIgnoreFilePath.js - gets the .jshintignore or the .gitignore file of the project
*
**/
var path = require('path')
	, fs = require('fs')
  ;

var checkForProjectFile = require('./checkForProjectFile.js')
  , formatHappyText = require('./formatHappyText')
  , formatAngryText = require('./formatAngryText')
  ;

module.exports = function (projectDir) {
	var jshintIgnore = checkForProjectFile(projectDir, '.jshintignore')
		,	defaultHintIgnore = checkForProjectFile(path.join(path.dirname(fs.realpathSync(__filename)), '../configuration'), '.jshintignore')
		;

	if (jshintIgnore) {
    console.log(`\nFound .jshintignore file...`);
    console.log(`Using ${formatHappyText(jshintIgnore)} as excludePath`);

		return jshintIgnore;
	}

  console.log(`\n${formatAngryText('Didnt find a .jshintignore file locally')}`);
  console.log(`Using ${formatHappyText('default astro')} .jshintignore as exclude \n`);
	console.log(`Using ${formatHappyText(defaultHintIgnore)} as excludePath`);

  return defaultHintIgnore;
};