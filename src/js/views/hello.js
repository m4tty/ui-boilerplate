var util = require('util'),
	BaseView = require('./base');

function HelloView() {
}

util.inherits(HelloView, BaseView);

module.exports = HelloView;


