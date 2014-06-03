module.exports = {};

var fs = require('fs');

module.exports.readAFile = function(fileName) {
	var fileContents = 's';
	fs.readFile(fileName, { encoding: 'utf8' }, function(err, contents) {
		fileContents = contents;
		console.log(contents);
	});
	return fileContents;
};
