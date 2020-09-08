const express = require('express');
const app = express();
const {
  addTask,
  toggleTaskStatus,
  getTodo,
  deleteTask,
  updateTitle,
  resetTodo,
} = require('./handlers');

const Todo = require('./todo');

app.locals.Todo = new Todo();

app.use(express.json());
app.get('/api/getTodo', getTodo);
app.post('/api/addTask', addTask);
app.post('/api/toggleTaskStatus', toggleTaskStatus);
app.post('/api/deleteTask', deleteTask);
app.post('/api/updateTitle', updateTitle);
app.post('/api/resetTodo', resetTodo);

app.listen(8000, () => console.log('listening on port 8000'));
