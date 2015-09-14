/**
*
* buildArgs.js - processes the arguments provided
*
**/

var path = require('path')
	, fs = require('fs')
	;

var getIgnoreFile = require('./getIgnoreFilePath')
	,	getJsHintRcFilePath = require('./getJsHintRcFilePath')
  , formatAngryText = require('./formatAngryText')
	;

function buildArgs (projectDir) {
	var args = []
		, reporter = path.resolve(fs.realpathSync(__dirname), '../node_modules/jshint-stylish')
		, excludeFilePath = getIgnoreFile(projectDir)
		,	jshintrcFilePath = getJsHintRcFilePath(projectDir)
		;

	args.push(`--reporter=${reporter}`);

  if (excludeFilePath !== undefined) {
	  args.push(`--exclude-path=${excludeFilePath}`);
  } else {
		console.log(`${formatAngryText('\t')}`);
		console.log(`${formatAngryText('\t\t')}`);
		console.log(`${formatAngryText('\t\t\t')}`);
		console.log(`${formatAngryText('\t\t\t\t')}`);
    console.log(`${formatAngryText('\t\t\t\tCouldnt find exclude file ignoring from jshint call\t\t')}`);
    console.log(`${formatAngryText('\t\t\t\tThis is a known bug where we cant load our local jshintignore \t\t')}`);
    console.log(`${formatAngryText('\t\t\t\tYour project should just include a .jshintignore file and use it for the time being\t\t')}`);
    console.log(`${formatAngryText('\t\t\t\tastro says you should probably cntl+c this process.\t\t')} `);
    console.log(`${formatAngryText('\t\t\t\t')}`);
    console.log(`${formatAngryText('\t\t\t')}`);
    console.log(`${formatAngryText('\t\t')}`);
    console.log(`${formatAngryText('\t')}`);
  }

	args.push(`--config=${jshintrcFilePath}`);
	args.push(`--verbose`);

	// add projectDir as source
	args.push(projectDir);

	return args;
}

module.exports = buildArgs;