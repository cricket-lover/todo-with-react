import React from 'react';
import TodoInput from './TodoInput';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditable: false };
    this.handleClick = this.handleClick.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  handleClick() {
    this.setState({ isEditable: true });
  }

  updateTitle(value) {
    this.setState({ isEditable: false });
    this.props.onChange(value);
  }

  render() {
    if (this.state.isEditable) {
      return (
        <TodoInput
          value={this.props.value}
          onEnterPress={this.updateTitle}
          className="title"
        />
      );
    }
    return (
      <div
        className="title"
        onClick={this.handleClick}
        style={{ cursor: 'pointer' }}
      >
        {this.props.value}
      </div>
    );
  }
}

export default Title;
