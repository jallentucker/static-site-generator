var chai = require('chai');
var expect = chai.expect;
var path = require('path');
var lib = require('../index');

describe('readAFile()', function() {
	it('returns the contents of a file', function(done) {
		var siteFile = path.join(__dirname,'fixtures/testFile.txt');
		lib.readAFile(siteFile, function (err, processedString) {
			expect(processedString).to.eql('My name is Joe.');
			done();
		});
	});
});

describe('createNewPage()', function() {
	it('creates a new page from two pages', function(done) {
		var defaultFile = path.join(__dirname,'fixtures/test-site/layouts/default.html');
		var contentFile = path.join(__dirname,'fixtures/test-site/pages/home.html');
 		var outputFile = path.join(__dirname,'/tmp/home.html'); // TODO: come back and fix
 		var expectedFile = path.join(__dirname,'expected/test-site/home.html');

 		lib.createNewPage (defaultFile, contentFile, outputFile, function(err) {
 			lib.readAFile (outputFile, function (err, outputFileContents) {
 				lib.readAFile (expectedFile, function (err, expectedFileContents) {
 					expect(outputFileContents).to.eql(expectedFileContents);
 					done();
 				});
 			});

 		});

		// var newString = defaultFile.replace ()

		// given default.html and home.html - we expect it to.eql the contents of expected/test-site/home.html
	});
});