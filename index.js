module.exports = {};

var fs = require('fs');

/**
 * Reads in a file to a string
 *
 * @function
 * @param {string} file - Descriptive sentence.
 * @param {} 
 * @param {}  - .
 */
var readAFile = module.exports.readAFile = function(file, cb) {
	fs.readFile(file, { encoding: 'utf8' }, function(err, contents) {
		cb(err, contents);
	});
};

module.exports.createNewPage = function(file1, file2, file3, cb) {

	readAFile(file1, function(err, defaultString) {
		readAFile(file2, function(err, contentString) {
		 	var outputString = defaultString.replace('{{ content }}', contentString);
			fs.writeFile(file3, outputString, function(err) {
				cb(err);
			});
	  });
	});
};