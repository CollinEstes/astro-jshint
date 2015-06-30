/**
*
* buildArgsSpec.js
*
**/

var buildArgs = require('../src/buildArgs');


describe('buildArgs.js', function () {

	it('should handle no args', function () {
		var args = buildArgs(this.mockPath, {});
		expect(args).to.be.ok;
	});


});
