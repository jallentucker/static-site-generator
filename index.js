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
module.exports.readAFile = function(file, cb) {
	fs.readFile(file, { encoding: 'utf8' }, function(err, contents) {
		cb(err, contents);
	});
};

