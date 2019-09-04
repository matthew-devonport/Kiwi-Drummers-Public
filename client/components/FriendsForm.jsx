import React from 'react';

class FriendsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likesGenre: true,
      howMany: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert(
      'The number of friends that like the same music as you is: ' +
        this.state.value
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h2>Do you friends like the same music?</h2>
          Yes:
          <input
            name='Yes'
            type='checkbox'
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          <h2>How many of your friends like the same music?</h2>
          <input
            name='numberOfFriends'
            type='number'
            value={this.state.numberOfFriends}
            onChange={this.handleInputChange}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default FriendsForm;
