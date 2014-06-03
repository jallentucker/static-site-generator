module.exports = {};

var fs = require('fs');

module.exports.readAFile = function(file, cb) {

	// cb(undefined, 'My name is Joe.');

	fs.readFile(file, { encoding: 'utf8' }, function(err, contents) {
		cb(err, contents);
		console.log(contents);
	});
	
	

};
