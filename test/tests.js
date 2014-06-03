var chai = require('chai');
var expect = chai.expect;
var _ = require('../index');

describe('readAFile()', function() {
	it('returns the contents of a file', function() {
		expect(_.readAFile('./testFile.txt')).to.eql('My name is Joe.');
	});
});