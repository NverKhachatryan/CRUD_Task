const task = require('./task/task.service.js');
const todo = require('./todo/todo.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(task);
  app.configure(todo);
};
