module.exports = {};
var path = require('path');

var fs = require('fs');

/**
 * Reads in a file to a string.
 *
 * @function
 * @param {string} file - The file to be read.
 * @param {function} cb - This cb will be called after the file has been read.
 */
var readAFile = module.exports.readAFile = function(file, cb) {
	fs.readFile(file, { encoding: 'utf8' }, function(err, contents) {
		cb(err, contents);
	});
};

/**
 * Reads in two files to strings,
 * then it creates a new string and writes to a new file.
 *
 * @function
 * @param {string} file1 - A path to the HTML template.
 * @param {string} file2 - A path to the file containing content for a web page.
 * @param {string} file3 - A path to the output file to be overwritten
 * or created.
 * @param {function} cb - This cb will be called after the new page has been
 * created with one arg, `err`, an error.
 */
var createNewPage = module.exports.createNewPage = function(file1, file2, file3, cb) {

	readAFile(file1, function(err, defaultString) {
		if (err) { return cb(err); }
		readAFile(file2, function(err, contentString) {
			if (err) { return cb(err); }
		 	var outputString = defaultString.replace('{{ content }}', contentString);
				fs.writeFile(file3, outputString, function(err) {
					cb(err);
				});
	  });
	});
};

/**
 * Creates a site from a given template and given content.
 * 
 * @function
 * @param {string} templatePath - A path to the HTML template that structures 
 * each page. 
 * @param {array} contentFiles - Array of file paths that include content for 
 * web pages.
 * @param {string} outputDir - A path to the directory where output files are
 * stored. This directory must exist before this function is called. 
 * @param {function} cb - This cb will be called after site has been generated
 * with one arg, `err`, an error.
 */
module.exports.createSite = function(templatePath, contentFiles, outputDir, cb) {
	var counter = 0;
	contentFiles.forEach(function(file) {
		var outputFile = path.join(outputDir, path.basename(file));
		console.log('templatePath: %s', templatePath);
		console.log('file: %s', file);
		console.log('outputDir: %s', outputDir);
		console.log('outputFile: %s', outputFile);
		createNewPage(templatePath, file, outputFile, function(err) {
			counter += 1;
			if (counter === contentFiles.length) {
				cb(err);
			}
		});
	});
};
