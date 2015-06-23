/**
*
* checkForProjectFile.js - looks for a given file in a project directory and returns the path
*
**/

module.exports = function (projectDir, fileName) {
	var filePath = projectDir + '/' + fileName;
	try {
		require.resolve(projectDir + '/' + fileName);
		return filePath;
	} catch (e) {
		return null;
	}
};
