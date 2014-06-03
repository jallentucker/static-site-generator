module.exports = {};

var fs = require('fs');

module.exports.readAFile = function(file, cb) {
	fs.readFile(file, { encoding: 'utf8' }, function(err, contents) {
		cb(err, contents);
	});
};
