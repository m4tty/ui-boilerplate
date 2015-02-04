


var Data = function() {

	var self = this;

	this.title = 'Loading...';
	this.todos = [];


	this.storeTodo = function (data) {
			self.todos.push(data);
	};
	this.getActiveTodos= function () {
			return self.todos.filter(function (todo) {
				return !todo.completed;
			});
		};
		this.getCompletedTodos= function () {
			return self.todos.filter(function (todo) {
				return todo.completed;
			});
		};
		this.getTodos= function (filter) {
			if (filter === 'active') {
				return self.getActiveTodos();
			}

			if (filter === 'completed') {
				return self.getCompletedTodos();
			}

			return self.todos;
		};
		this.destroyCompleted= function () {
			self.todos = self.getActiveTodos();
			//this.filter = 'all';
			//this.render();
		};


//	jQuery.ajax({
//		type: 'GET',
//		url: 'http://echo.jsontest.com/title/My%20App',
//		success: function(data) {
//			self.title = decodeURIComponent(data.title);
//		},
//		dataType: 'jsonp',
//		crossDomain: true
//	});
};




module.exports = Data;
