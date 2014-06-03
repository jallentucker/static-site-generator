module.exports = {};

var fs = require('fs');

module.exports.readAFile = function(file, cb) {
	console.log('\treadAFile: entry point');

	console.log('\treadAFile: starting fs.readFile');
	fs.readFile(file, { encoding: 'utf8' }, function(err, contents) {
		console.log('\treadAFile: fs.readFile callback executed');
		console.log('\treadAFile: about to call cb');
		cb(err, contents);
		console.log('\treadAFile: cb call is complete');
	});
	console.log('\treadAFile: running code after call to fs.readFile');
	console.log('\treadAFile: exiting function');
};
