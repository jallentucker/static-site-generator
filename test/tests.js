var chai = require('chai');
var expect = chai.expect;
var path = require('path');
var lib = require('../index');

describe('readAFile()', function(done) {
	it('returns the contents of a file', function(done) {
		var siteFile = path.join('./testFile.txt');

		lib.readAFile(siteFile, function (err, processedString) {
			expect(processedString).to.eql('My name is Joe.');
			done();
		});

	// 	processAFile(siteFile, function(err, processed) {
 //      fs.readFile(expected, { encoding: 'utf8'}, function(err, contents) {
 //        expect(processed).to.eql('My name is Joe.');

 //        done();
 //      });
	// });
	});
});