import React from 'react';
import BandsForm from './BandsForm'

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Thank you!' + this.state.value);
    event.preventDefault();
    const data = {
      id: this.props.id,
      fullname: this.props.fullname,
      genre: this.props.genre,
      active: this.state.active,
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h2>Your full name:</h2>
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <h2>Please select your genre of music:</h2>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='Metal'>Metal</option>
            <option value='Rock'>Rock</option>
            <option value='Pop'>Pop</option>
            <option value='Rap'>Rap</option>
            <option value='Jazz'>Jazz</option>
          </select>
        </label>
        <BandsForm />
        <label>
          <h2>Names of the bands you currently drum for:</h2>
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='submit' />
      </form>
    );
  }
}

export default NameForm;
