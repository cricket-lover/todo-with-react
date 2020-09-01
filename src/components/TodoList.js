import React from 'react';
import Todo from './Todo';
import TodoInput from './TodoInput';
import Title from './Title';
import '../todo.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      title: 'Todo',
    };
    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.addTask = this.addTask.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  toggleTaskStatus(todoId) {
    const updatedTodos = this.state.todos.slice();
    updatedTodos[todoId].statusId = ++updatedTodos[todoId].statusId % 3;
    this.setState((state) => ({ todos: updatedTodos }));
  }

  addTask(value) {
    const updatedTodos = this.state.todos.slice();
    updatedTodos.push({ item: value, statusId: 0 });
    this.setState((state) => ({ todos: updatedTodos }));
  }

  updateTitle(title) {
    this.setState((state) => ({ title }));
  }

  render() {
    const todoList = this.state.todos.map((todo, index) => {
      return (
        <Todo
          key={index}
          item={todo.item}
          statusId={todo.statusId}
          onClick={this.toggleTaskStatus}
          todoId={index}
        />
      );
    });
    return (
      <div className="todo-container">
        <Title value={this.state.title} onChange={this.updateTitle} />
        {todoList}
        <TodoInput className="taskInput" onEnterPress={this.addTask} />
      </div>
    );
  }
}

export default TodoList;
