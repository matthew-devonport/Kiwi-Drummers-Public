import React from 'react';
import { newDrummer } from '../api';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberOfBands: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert('Thank you! ' + this.state.name);
    event.preventDefault();
    const data = {
      fullName: this.state.name,
      genre: this.state.genre,
      active: this.state.active,
      number: this.state.numberOfBands,
      bands: this.state.nameOfBands
    };
    newDrummer(data);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Fill out the form!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h2>Your full name:</h2>
            <textarea
              name='name'
              value={this.state.name}
              placeholder='Please enter your name'
              onChange={this.handleChange}
            />
          </label>
          <h2>Please select your genre of music:</h2>
          <label>
            <select
              name='genre'
              value={this.state.genre}
              onChange={this.handleChange}
            >
              <option value=''></option>
              <option value='Metal'>Metal</option>
              <option value='Rock'>Rock</option>
              <option value='Pop'>Pop</option>
              <option value='Rap'>Rap</option>
              <option value='Jazz'>Jazz</option>
            </select>
          </label>
          <label>
            <h2>Are you currently active in a band?</h2>
            Yes:
            <input
              name='Yes'
              type='checkbox'
              checked={this.state.active}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            <h2>How many bands are you in?</h2>
            <input
              name='numberOfBands'
              type='number'
              value={this.state.numberOfBands}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            <h2>Names of the bands you currently drum for:</h2>
            <textarea
              name='nameOfBands'
              value={this.state.nameOfBands}
              onChange={this.handleChange}
            />
          </label>
          <input type='submit' value='submit' />
        </form>
      </React.Fragment>
    );
  }
}

export default NameForm;
