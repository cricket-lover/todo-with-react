const getTodo = function (req, res) {
  const { Todo } = req.app.locals;
  res.json(Todo.getTodo());
};

const addTask = (req, res) => {
  const { content } = req.body;
  const { Todo } = req.app.locals;
  const updatedTodos = Todo.addTask(content);
  res.json(updatedTodos);
};

const toggleTaskStatus = (req, res) => {
  const { Todo } = req.app.locals;
  const updatedTodos = Todo.toggleTaskStatus(req.body.taskId);
  res.json(updatedTodos);
};

const deleteTask = (req, res) => {
  const { taskId } = req.body;
  const { Todo } = req.app.locals;
  const updatedTodos = Todo.deleteTask(taskId);
  res.json(updatedTodos);
};

const updateTitle = (req, res) => {
  const { title } = req.body;
  const { Todo } = req.app.locals;
  const updatedTodos = Todo.updateTitle(title);
  res.json(updatedTodos);
};

const resetTodo = (req, res) => {
  const { Todo } = req.app.locals;
  res.json(Todo.resetTodo());
};

module.exports = {
  addTask,
  toggleTaskStatus,
  getTodo,
  deleteTask,
  updateTitle,
  resetTodo,
};
