var chai = require('chai');
var expect = chai.expect;
var path = require('path');
var lib = require('../index');

describe('readAFile()', function() {
	it('returns the contents of a file', function(done) {
		var siteFile = path.join(__dirname,'fixtures/testFile.txt');
		lib.readAFile(siteFile, function (err, processedString) {
			if (err) { throw err; }
			expect(processedString).to.eql('My name is Joe.');
			done();
		});
	});
});

describe('createNewPage()', function() {
	it('creates a new page from two pages', function(done) {
		var defaultFile = path.join(__dirname,'fixtures/test-site/layouts/default.html');
		var contentFile = path.join(__dirname,'fixtures/test-site/pages/home.html');
		// TODO: use real tmp directory (and for other tests)
 		var outputFile = path.join(__dirname,'tmp/home.html');
 		var expectedFile = path.join(__dirname,'expected/test-site/home.html');

 		lib.createNewPage (defaultFile, contentFile, outputFile, function(err1) {
 			if (err1) { throw err1; }
 			lib.readAFile (outputFile, function (err2, outputFileContents) {
 				if (err2) { throw err2; }
 				lib.readAFile (expectedFile, function (err3, expectedFileContents) {
 					if (err3) { throw err3; }
 					expect(outputFileContents).to.eql(expectedFileContents);
 					done();
 				});
 			});
 		});
	});
});

describe('createSite()', function() {
	it('creates or updates a site with a home and about page', function(done) {
		var defaultFile = path.join(__dirname,'fixtures/test-site/layouts/default.html');
		var contentHomeFile = path.join(__dirname,'fixtures/test-site/pages/home.html');
 		var outputHomeFile = path.join(__dirname,'tmp/home.html'); 
 		var expectedHomeFile = path.join(__dirname,'expected/test-site/home.html');

 		var contentAboutFile = path.join(__dirname,'fixtures/test-site/pages/about.html');
 		var outputAboutFile = path.join(__dirname,'tmp/about.html');
 		var expectedAboutFile = path.join(__dirname,'expected/test-site/about.html'); 
 		var outputDir = path.join(__dirname, 'tmp');

 		var contentDir = path.join(__dirname, 'fixtures/test-site/pages');

 		lib.createSite(defaultFile, contentDir, outputDir, function(err1) {
			if (err1) { throw err1; }
 			lib.readAFile (outputHomeFile, function (err2, outputFileContents) {
 				if (err2) { throw err2; }
 				lib.readAFile (expectedHomeFile, function (err3, expectedFileContents) {
					if (err3) { throw err3; }
		 			lib.readAFile (outputAboutFile, function (err5, outputAboutFileContents) {
		 				if (err5) { throw err5; }
		 				lib.readAFile (expectedAboutFile, function (err6, expectedAboutFileContents) {
		 					if (err6) { throw err6; }
		 					expect([outputFileContents, outputAboutFileContents])
		 					.to.eql([expectedFileContents, expectedAboutFileContents]);
		 					done();
		 				});
		 			});
				});
			});
 		});
	});
});

