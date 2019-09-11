import React from 'react';
import NameForm from './NameForm';
import Home from './Home'


class App extends React.Component {
  state = {userData: {
    name: '',
    genre: '',
    friends: undefined,
    number: undefined
  }}

  render() {
    return (
      <React.Fragment>
        <h1>Fill out the form!</h1>
        <NameForm />
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
