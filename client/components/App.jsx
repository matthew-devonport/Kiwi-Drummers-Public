import React from 'react';
import NameForm from './NameForm';
import GenreForm from './GenreForm';
import BandsForm from './BandsForm';
import DisplayData from './DisplayData'
import BandsNameForm from './BandsNameForm';

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
        <GenreForm />
        <BandsForm />
        <BandsNameForm />
        <DisplayData {...this.state.userData}/>
      </React.Fragment>
    );
  }
}

export default App;
