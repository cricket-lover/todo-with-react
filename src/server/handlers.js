const database = require('./database');

const getTodo = async (req, res) => {
  const todos = await database.getTodo();
  res.json(todos);
};

const addTask = async (req, res) => {
  const { content } = req.body;

  const updatedTodos = await database.addTask(content);
  res.json(updatedTodos);
};

const toggleTaskStatus = async (req, res) => {
  const updatedTodos = await database.toggleTaskStatus(req.body.taskId);
  res.json(updatedTodos);
};

const deleteTask = async (req, res) => {
  const { taskId } = req.body;

  const updatedTodos = await database.deleteTask(taskId);
  res.json(updatedTodos);
};

const updateTitle = async (req, res) => {
  const { title } = req.body;

  const updatedTodos = await database.updateTitle(title);
  res.json(updatedTodos);
};

const resetTodo = async (req, res) => {
  res.json(await database.resetTodo());
};

module.exports = {
  addTask,
  toggleTaskStatus,
  getTodo,
  deleteTask,
  updateTitle,
  resetTodo,
};
