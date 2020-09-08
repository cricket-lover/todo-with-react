const { getDefaultStatus, getNextStatus } = require('./status');

class Todo {
  constructor() {
    this.title = 'Todo';
    this.tasks = [];
    this.prevId = 0;
  }

  addTask(value) {
    this.tasks.push({
      content: value,
      status: getDefaultStatus(),
      id: this.prevId++,
    });
    return this.tasks;
  }

  toggleTaskStatus = (taskId) => {
    const index = this.tasks.findIndex((task) => task.id === taskId);
    this.tasks[index].status = getNextStatus(this.tasks[index].status);
    return this.tasks;
  };

  resetTodo = () => {
    this.tasks = [];
  };

  deleteTask = (taskId) => {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    return this.tasks;
  };

  updateTitle = (newTitle) => (this.title = newTitle);

  getTodo = () => {
    return { title: this.title, tasks: this.tasks, prevId: this.prevId };
  };
}

module.exports = Todo;
