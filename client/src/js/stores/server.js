var Reflux = require('reflux');
var actions = require('../actions/server.js');

var servers = {};

var serverStore = Reflux.createStore({
	init: function() {
		this.listenToMany(actions);
	},

	connect: function(data) {
		servers[data.server] = data;
		this.trigger(servers);
	},

	getState: function() {
		return servers;
	}
});

module.exports = serverStore;