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

  console.log(`\nUsing ${formatHappyText(hasLocalJsHintRc ? 'local' : 'default astro')} .jshintrc`);
  console.log(`File path is: ${formatHappyText(hasLocalJsHintRc ? jshintrcFile : getDefault())}`);

  return (hasLocalJsHintRc ? jshintrcFile : getDefault());
};