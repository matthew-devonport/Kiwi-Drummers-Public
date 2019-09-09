import React from 'react';
import NameForm from './NameForm';
import DisplayData from './DisplayData'


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
        <DisplayData {...this.state.userData}/>
      </React.Fragment>
    );
  }
}

export default App;
