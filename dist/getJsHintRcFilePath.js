/**
 *
 * getJsHintRcFile.js
 *
 **/
'use strict';

var path = require('path'),
    fs = require('fs');

var checkForProjectFile = require('./checkForProjectFile.js'),
    formatHappyText = require('./formatHappyText');

function getDefault() {
  return path.join(path.dirname(fs.realpathSync(__filename)), '../configuration/.jshintrc');
}

module.exports = function (projectDir) {
  var jshintrcFile = checkForProjectFile(projectDir, '.jshintrc'),
      hasLocalJsHintRc = jshintrcFile !== undefined;

  if (!hasLocalJsHintRc) {
    console.log('\nDidnt find .jshintrc file...');
  } else {
    console.log('\nFound .jshintrc file...');
  }

  console.log('Using ' + formatHappyText(hasLocalJsHintRc ? 'local' : 'default astro') + ' .jshintrc file');
  console.log('.jshintrc path ' + formatHappyText(hasLocalJsHintRc ? jshintrcFile : getDefault()) + ' \n');

  return hasLocalJsHintRc ? jshintrcFile : getDefault();
};