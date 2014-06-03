var chai = require('chai');
var expect = chai.expect;
var path = require('path');
var lib = require('../index');

describe('readAFile()', function() {
	it('returns the contents of a file', function(done) {
		var siteFile = path.join(__dirname,'fixtures/testFile.txt');
		lib.readAFile(siteFile, function (err, processedString) {
			if (err) { return cb(err); }
			expect(processedString).to.eql('My name is Joe.');
			done();
		});
	});
});

describe('createNewPage()', function() {
	it('creates a new page from two pages', function(done) {
		var defaultFile = path.join(__dirname,'fixtures/test-site/layouts/default.html');
		var contentFile = path.join(__dirname,'fixtures/test-site/pages/home.html');
 		var outputFile = path.join(__dirname,'/fixtures/test-site/output-pages/home.html'); 
 		var expectedFile = path.join(__dirname,'expected/test-site/home.html');

 		lib.createNewPage (defaultFile, contentFile, outputFile, function(err1) {
 			if (err1) { return cb(err1); }
 			lib.readAFile (outputFile, function (err2, outputFileContents) {
 				if (err2) { return cb(err2); }
 				lib.readAFile (expectedFile, function (err3, expectedFileContents) {
 					if (err3) { return cb(err3); }
 					expect(outputFileContents).to.eql(expectedFileContents);
 					done();
 				});
 			});
 		});
	});
});