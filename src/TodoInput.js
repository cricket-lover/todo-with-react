import React from 'react';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState((state) => ({ value }));
  }

  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.props.onEnterPress(this.state.value);
      this.setState((state) => ({ value: '' }));
    }
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
      />
    );
  }
}

export default TodoInput;
