const database = require('./database');

class Todo {
  constructor(client) {
    this.client = client;
  }

  addTask(value) {
    return database.addTask(this.client, value);
  }

  toggleTaskStatus = (taskId) => {
    return database.toggleTaskStatus(this.client, taskId);
  };

  resetTodo = () => {
    database.resetTodo(this.client);
  };

  deleteTask = (taskId) => {
    return database.deleteTask(this.client, taskId);
  };

  updateTitle = (newTitle) => {
    return database.updateTitle(this.client, newTitle);
  };

  getTodo = () => {
    return database.getTodo(this.client);
  };
}

module.exports = Todo;
