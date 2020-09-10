const redis = require('redis');
const client = redis.createClient({ db: 1 });
const { getDefaultStatus, getNextStatus } = require('./status');

const getCurrId = () => {
  return new Promise((resolve, reject) =>
    client.incr('id', (err, res) => resolve(res))
  );
};

const getTitle = () => {
  return new Promise((resolve, reject) => {
    client.get('title', (err, title) => resolve(title));
  });
};

const getTasks = () => {
  return new Promise((resolve, reject) => {
    client.get('tasks', (err, tasks) => resolve(JSON.parse(tasks)));
  });
};

const getTodo = async () => {
  const title = await getTitle();
  const tasks = await getTasks();
  return { title: title || 'Todo', tasks: tasks || [] };
};

const setTasks = (tasks) => {
  return new Promise((resolve, reject) => {
    client.set('tasks', JSON.stringify(tasks), (err, res) => resolve(res));
  });
};

const addTask = async (value) => {
  const id = await getCurrId();
  let tasks = await getTasks();
  tasks = tasks || [];
  tasks.push({ content: value, status: getDefaultStatus(), id });
  await setTasks(tasks);
  return tasks;
};

const toggleTaskStatus = async (taskId) => {
  let tasks = await getTasks();
  const index = tasks.findIndex((task) => task.id === taskId);
  tasks[index].status = getNextStatus(tasks[index].status);
  await setTasks(tasks);
  return tasks;
};

const deleteTask = async (taskId) => {
  let tasks = await getTasks();
  tasks = tasks.filter((task) => task.id !== taskId);
  await setTasks(tasks);
  return tasks;
};

const updateTitle = (newTitle) => {
  return new Promise((resolve, reject) => {
    client.set('title', newTitle, (err, res) => resolve(res));
  });
};

const resetTodo = async () => {
  await setTasks([]);
  await updateTitle('Todo');
};

module.exports = {
  addTask,
  getTodo,
  toggleTaskStatus,
  deleteTask,
  updateTitle,
  resetTodo,
};
