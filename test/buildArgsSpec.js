/**
*
* buildArgsSpec.js
*
**/

var buildArgs = require('../src/buildArgs');
var _ = require('lodash');

describe('buildArgs.js', function () {

	beforeEach(function () {
		this.allOptions = {
			"chai": true,
			"sinon": true
		};

		this.someOptions = {
			sinon: true
		};

		this.mockPath = '/src'

	});

	it('should return a string array', function () {
		expect(buildArgs(this.mockPath, this.allOptions)).to.be.an.instanceof(Array);
	});

	it('should handle no args', function () {
		var args = buildArgs(this.mockPath, {});
		expect(args).to.be.ok;
	});


});
