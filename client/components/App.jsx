import React from 'react';
import NameForm from './NameForm';
import BandForm from './BandForm';
import FriendsForm from './FriendsForm';
import DisplayData from './DisplayData'

class App extends React.Component {
  state = {userData: {
    name: '',
    genre: '',
    friends: undefined,
    number: 0
  }}

  render() {
    return (
      <React.Fragment>
        <h1>Fill out the form!</h1>
        <NameForm />
        <BandForm />
        <FriendsForm />
        <DisplayData {...this.state.userData}/>
      </React.Fragment>
    );
  }
}

export default App;
