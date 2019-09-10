import React from 'react';
import NameForm from './NameForm';



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
      </React.Fragment>
    );
  }
}

export default App;
