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
    this.setState((state) => (state.value = value));
  }

  handleClick(todoId) {
    const updatedTodos = this.state.todos.slice();
    updatedTodos[todoId].hasDone = !updatedTodos[todoId].hasDone;
    this.setState((state) => ({ todos: updatedTodos }));
  }

  handleKeyPress(event) {
    if (event.which === 13) {
      const updatedTodos = this.state.todos.slice();
      updatedTodos.push({ item: this.state.value, hasDone: false });
      this.setState((state) => ({ todos: updatedTodos, value: '' }));
    }
  }

  render() {
    const todoList = this.state.todos.map((todo, index) => {
      return (
        <Todo
          key={index}
          item={todo.item}
          hasDone={todo.hasDone}
          onClick={this.handleClick}
          todoId={index}
        />
      );
    });
    return (
      <div>
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
