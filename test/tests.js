var chai = require('chai');
var expect = chai.expect;
var path = require('path');
var lib = require('../index');

describe('readAFile()', function(done) {
	it('returns the contents of a file', function(done) {
		var siteFile = path.join('./testFile.txt');

		console.log('\ntest: starting');
		console.log('test: starting lib.readAFile');
		lib.readAFile(siteFile, function (err, processedString) {
			console.log('test: lib.readAFile callback called');
			expect(processedString).to.eql('My name is Joe.');
			done();
		});
		console.log('test: code after lib.readAFile');
		console.log('test: exiting function');

	// 	processAFile(siteFile, function(err, processed) {
 //      fs.readFile(expected, { encoding: 'utf8'}, function(err, contents) {
 //        expect(processed).to.eql('My name is Joe.');

 //        done();
 //      });
	// });
	});
});