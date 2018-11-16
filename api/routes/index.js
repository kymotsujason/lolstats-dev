const lolReq = require('./routes');
module.exports = function(app, req) {
	lolReq(app, req);
};