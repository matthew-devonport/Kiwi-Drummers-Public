import React from 'react';
import { getDrummerInfo } from '../api';
import {connect} from 'react-redux'
import { fetchDrummers } from '../actions';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drummers: []
    };
  }

  componentDidMount() {
    
    fetchDrummers()
    // getDrummerInfo().then(result => {
    //   let data = result.body;
    //   this.setState({
    //     drummers: data
    //   });
    // });
  }

  render() {
    const { drummers } = this.state;
    return (
      <React.Fragment>
        <div>
          <ul>
            {drummers.map((drummer, i) => (
              <li key={i}>
                <a href={`/#/artist/${drummer.id}`}>{drummer.fullname}</a>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps)(Home);
