import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      todos: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState((state) => ({ value }));
  }

  handleClick(todoId) {
    const updatedTodos = this.state.todos.slice();
    updatedTodos[todoId].isDone = !updatedTodos[todoId].isDone;
    this.setState((state) => ({ todos: updatedTodos }));
  }

  handleKeyPress(event) {
    if (event.which === 13) {
      const updatedTodos = this.state.todos.slice();
      updatedTodos.push({ item: this.state.value, isDone: false });
      this.setState((state) => ({ todos: updatedTodos, value: '' }));
    }
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
      <div style={{ width: '30%', margin: '0 auto' }}>
        {todoList}
        <input
          type="text"
          value={this.state.value}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TodoList;
