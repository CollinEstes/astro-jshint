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

function getDefault () {
	return path.join(path.dirname(fs.realpathSync(__filename)), '../defaults/.jshintignore');
}

module.exports = function (projectDir) {
	var jshintIgnore = checkForProjectFile(projectDir, '.jshintignore')
		, gitIgnore = checkForProjectFile(projectDir, '.gitignore')
		;

	if (jshintIgnore) {
    console.log(`\nFound .jshintignore file...`);
    console.log(`Using ${formatHappyText(jshintIgnore)} as excludePath \n`);
		return jshintIgnore;
	}

	if (gitIgnore) {
    console.log(`\nFound .gitignore file...`);
    console.log(`Using ${formatHappyText(gitIgnore)} as excludePath \n`);
		return gitIgnore;
	}

  console.log(`\n${formatAngryText('Didnt find a .jshintignore or a .gitignore file locally')}`);
  console.log(`Using ${formatHappyText('default astro')} .jshintignore as exclude \n`);

  return getDefault();
};