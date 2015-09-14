/**
*
* getIgnoreFilePath.js - gets the .jshintignore or the .gitignore file of the project
*
**/
var path = require('path')
	;

var checkForProjectFile = require('./checkForProjectFile.js')
  , formatHappyText = require('./formatHappyText')
  , formatAngryText = require('./formatAngryText')
  ;

module.exports = function (projectDir) {
	var jshintIgnore = checkForProjectFile(projectDir, '.jshintignore')
		,	defaultHintIgnore = checkForProjectFile(path.join(__dirname), '.jshintignore')
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