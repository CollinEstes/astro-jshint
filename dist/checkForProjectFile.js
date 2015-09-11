/**
*
* checkForProjectFile.js - looks for a given file in a project directory and returns the path
*
**/

"use strict";

module.exports = function (projectDir, fileName) {
	try {
		return require.resolve(projectDir + "/" + fileName);
	} catch (e) {
		return undefined;
	}
};