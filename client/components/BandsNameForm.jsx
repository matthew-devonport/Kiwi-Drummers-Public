import React from 'react';

class BandsNameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Please state the bands you currently drum for' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h2>Names of the bands you currently drum for:</h2>
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='submit' />
      </form>
    );
  }
}

export default BandsNameForm;
