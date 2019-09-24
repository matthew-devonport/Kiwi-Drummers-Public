import React from 'react';
import {connect} from 'react-redux'
import { fetchDrummers } from '../actions';


class Home extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(fetchDrummers())
  }

  render() {
    const { drummers } = this.props;
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
    drummers: state.drummers,
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps)(Home);
