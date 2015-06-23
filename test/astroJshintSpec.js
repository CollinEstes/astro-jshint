/**
*
* astroJshintSpce.js - main test
*
**/

var astroJshint = require('../')
	, cwd = '/test';

describe('astro-jshint', function () {

	it('should return command as jshint', function () {
		var result = astroJshint(cwd, {});
		expect(result.cmd).to.equal('jshint');
	});

	it('should return proper options', function () {
		var result = astroJshint(cwd, {});
		expect(result.args[result.args.length -1]).to.be.equal(cwd);
		expect(result.args.length).to.be.equal(3);
	});
});