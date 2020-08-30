import React from 'react';
import Todo from './Todo';
import TodoInput from './TodoInput';
import './todo.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleEnterPress = this.handleEnterPress.bind(this);
  }

  handleClick(todoId) {
    const updatedTodos = this.state.todos.slice();
    updatedTodos[todoId].isDone = !updatedTodos[todoId].isDone;
    this.setState((state) => ({ todos: updatedTodos }));
  }

  handleEnterPress(value) {
    const updatedTodos = this.state.todos.slice();
    updatedTodos.push({ item: value, isDone: false });
    this.setState((state) => ({ todos: updatedTodos }));
  }

  render() {
    const todoList = this.state.todos.map((todo, index) => {
      return (
        <Todo
          key={index}
          item={todo.item}
          isDone={todo.isDone}
          onClick={this.handleClick}
          todoId={index}
        />
      );
    });
    return (
      <div className="todo-container">
        {todoList}
        <TodoInput onEnterPress={this.handleEnterPress} />
      </div>
    );
  }
}

export default TodoList;
