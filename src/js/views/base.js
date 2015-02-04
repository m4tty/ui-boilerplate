var util = require('util'),
	EventEmitter = require('events').EventEmitter;

function BaseView() {
	
}

util.inherits(BaseView, EventEmitter);

module.exports = BaseView;
