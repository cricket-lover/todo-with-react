const postReq = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

const getTodo = () => fetch('/api/getTodo').then((res) => res.json());

const addTask = (task) => {
  return postReq('/api/addTask', { content: task });
};

const toggleTaskStatus = (taskId) => {
  return postReq('/api/toggleTaskStatus', { taskId });
};

const deleteTask = (taskId) => {
  return postReq('/api/deleteTask', { taskId });
};

const updateTitle = (title) => {
  return postReq('/api/updateTitle', { title });
};

const resetTodo = () => {
  return postReq('/api/resetTodo');
};

export default {
  getTodo,
  addTask,
  toggleTaskStatus,
  deleteTask,
  updateTitle,
  resetTodo,
};

// module.exports = TodoAPI;
