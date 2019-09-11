import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import NameForm from './NameForm';
import Home from './Home';
import Artist from './Artist'
import Header from './Header'

class App extends React.Component {
  state = {
    userData: {
      name: '',
      genre: '',
      friends: undefined,
      number: undefined
    }
  };

  render() {
    return (
      <Router>
        <Header />
        <Route path='/Form' component={NameForm} />
        <Route exact path='/' component ={Home} />
        <Route exact path='/artist/:id' component={Artist} />
      </Router>
    );
  }
}

export default App;
