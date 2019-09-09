import React from 'react';

class GenreForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Metal' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Your favorite genre was submitted. It is: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Please select your genre of music:</h2>
        <label>
          <select value ={this.state.value} onChange={this.handleChange}>
            <option value='Metal'>Metal</option>
            <option value='Rock'>Rock</option>
            <option value='Pop'>Pop</option>
            <option value='Rap'>Rap</option>
            <option value='Jazz'>Jazz</option>
          </select>
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default GenreForm;


