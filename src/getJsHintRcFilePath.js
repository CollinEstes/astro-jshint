/**
 *
 * getJsHintRcFile.js
 *
 **/
var path = require('path')
  , fs = require('fs')
  ;

var checkForProjectFile = require('./checkForProjectFile.js')
  ;

function getDefault () {
  return path.join(path.dirname(fs.realpathSync(__filename)), '../defaults/.jshintrc');
}

module.exports = function (projectDir) {
  var jshintrcFile = checkForProjectFile(projectDir, '.jshintrc')
    , hasLocalJsHintRc = jshintrcFile === undefined
    ;

  return (hasLocalJsHintRc ? jshintrcFile : getDefault());
}