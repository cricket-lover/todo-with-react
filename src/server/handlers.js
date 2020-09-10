const getTodo = async (req, res) => {
  const { todo } = req.app.locals;
  const todos = await todo.getTodo();
  res.json(todos);
};

const addTask = async (req, res) => {
  const { content } = req.body;
  const { todo } = req.app.locals;
  const updatedTodos = await todo.addTask(content);
  res.json(updatedTodos);
};

const toggleTaskStatus = async (req, res) => {
  const { todo } = req.app.locals;
  const updatedTodos = await todo.toggleTaskStatus(req.body.taskId);
  res.json(updatedTodos);
};

const deleteTask = async (req, res) => {
  const { taskId } = req.body;
  const { todo } = req.app.locals;
  const updatedTodos = await todo.deleteTask(taskId);
  res.json(updatedTodos);
};

const updateTitle = async (req, res) => {
  const { title } = req.body;
  const { todo } = req.app.locals;
  const updatedTodos = await todo.updateTitle(title);
  res.json(updatedTodos);
};

const resetTodo = async (req, res) => {
  const { todo } = req.app.locals;
  res.json(await todo.resetTodo());
};

module.exports = {
  addTask,
  toggleTaskStatus,
  getTodo,
  deleteTask,
  updateTitle,
  resetTodo,
};
