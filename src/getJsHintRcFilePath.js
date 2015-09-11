/**
 *
 * getJsHintRcFile.js
 *
 **/
var path = require('path')
  , fs = require('fs')
  ;

var checkForProjectFile = require('./checkForProjectFile.js')
  , formatHappyText = require('./formatHappyText')
  ;

function getDefault () {
  return path.join(path.dirname(fs.realpathSync(__filename)), '../defaults/.jshintrc');
}

module.exports = function (projectDir) {
  var jshintrcFile = checkForProjectFile(projectDir, '.jshintrc')
    , hasLocalJsHintRc = jshintrcFile !== undefined
    ;

  if (hasLocalJsHintRc) {
    console.log(`\nFound .jshintrc file...`);
  } else {
    console.log(`\nDidnt find .jshintrc file...`);
  }

  console.log(`Using ${formatHappyText(hasLocalJsHintRc ? 'local' : 'default astro')} .jshintrc file`);
  console.log(`.jshintrc path ${formatHappyText(hasLocalJsHintRc ? jshintrcFile : getDefault())}`);

  return (hasLocalJsHintRc ? jshintrcFile : getDefault());
};