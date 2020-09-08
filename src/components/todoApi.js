import { getDefaultStatus, getNextStatus } from '../status';

let title = 'Todo';
let tasks = [];
let prevId = 0;

const TodoAPI = {};

TodoAPI.addTask = (value) => {
  const updatedTasks = tasks.slice();
  updatedTasks.push({
    content: value,
    status: getDefaultStatus(),
    id: prevId++,
  });
  tasks = [...updatedTasks];
  return updatedTasks;
};

TodoAPI.toggleTaskStatus = (taskId) => {
  const updatedTasks = tasks.slice();
  const index = updatedTasks.findIndex((task) => task.id === taskId);
  updatedTasks[index].status = getNextStatus(updatedTasks[index].status);
  tasks = [...updatedTasks];
  return updatedTasks;
};

TodoAPI.deleteAllTasks = () => {
  tasks = [];
};

TodoAPI.deleteTask = (taskId) => {
  let updatedTasks = tasks.slice();
  updatedTasks = updatedTasks.filter((task) => task.id !== taskId);
  tasks = [...updatedTasks];
  return updatedTasks;
};

TodoAPI.updateTitle = (newTitle) => (title = newTitle);

export default TodoAPI;
