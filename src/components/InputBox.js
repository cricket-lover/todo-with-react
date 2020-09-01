import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value || '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState((state) => ({ value }));
  }

  handleKeyDown(event) {
    const value = event.target.value.trim();
    if (event.keyCode === 13 && value !== '') {
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
        className={this.props.className}
      />
    );
  }
}

export default InputBox;
