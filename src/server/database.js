const { getDefaultStatus, getNextStatus } = require('./status');

const getCurrId = (client) => {
  return new Promise((resolve, reject) =>
    client.incr('id', (err, res) => resolve(res))
  );
};

const getTitle = (client) => {
  return new Promise((resolve, reject) => {
    client.get('title', (err, title) => resolve(title));
  });
};

const getTasks = (client) => {
  return new Promise((resolve, reject) => {
    client.get('tasks', (err, tasks) => resolve(JSON.parse(tasks)));
  });
};

const getTodo = async (client) => {
  const title = await getTitle(client);
  const tasks = await getTasks(client);
  return { title: title || 'Todo', tasks: tasks || [] };
};

const setTasks = (client, tasks) => {
  return new Promise((resolve, reject) => {
    client.set('tasks', JSON.stringify(tasks), (err, res) => resolve(res));
  });
};

const addTask = async (client, value) => {
  const id = await getCurrId(client);
  let tasks = await getTasks(client);
  tasks = tasks || [];
  tasks.push({ content: value, status: getDefaultStatus(), id });
  await setTasks(client, tasks);
  return tasks;
};

const toggleTaskStatus = async (client, taskId) => {
  let tasks = await getTasks(client);
  const index = tasks.findIndex((task) => task.id === taskId);
  tasks[index].status = getNextStatus(tasks[index].status);
  await setTasks(client, tasks);
  return tasks;
};

const deleteTask = async (client, taskId) => {
  let tasks = await getTasks(client);
  tasks = tasks.filter((task) => task.id !== taskId);
  await setTasks(client, tasks);
  return tasks;
};

const updateTitle = (client, newTitle) => {
  return new Promise((resolve, reject) => {
    client.set('title', newTitle, (err, res) => resolve(res));
  });
};

const resetTodo = async (client) => {
  await setTasks(client, []);
  await updateTitle(client, 'Todo');
};

module.exports = {
  addTask,
  getTodo,
  toggleTaskStatus,
  deleteTask,
  updateTitle,
  resetTodo,
};
