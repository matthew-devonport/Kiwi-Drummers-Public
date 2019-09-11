import React from 'react';
import { getDrummerInfo } from '../api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drummers: []
    };
  }

  componentDidMount() {
    getDrummerInfo().then(result => {
      let data = result.body;
      this.setState({
        drummers: data
      })
    })
  }

  render() {
      
      const {drummers} = this.state
    return (
      <React.Fragment>
        <div>
          <ul>
            {drummers.map(drummer => <li>{drummer.fullname}</li>)}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
