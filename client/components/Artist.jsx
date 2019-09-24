import React from 'react';
import { fetchDrummers } from '../actions';
import { connect } from 'react-redux';

class Artist extends React.Component {

  loadDrummer() {
    this.props.dispatch(fetchDrummers());
  }

  componentDidMount() {
    this.loadDrummer();
  }

  componentWillReceiveProps() {
    this.loadDrummer();
  }

  render() {
    const { drummers } = this.props;
    let { id } = this.props.match.params;
    let drummer = drummers.find(item => {
      return id == item.id;
    });

    return (
      drummer ? (
      <React.Fragment>
        <p>Fullname: {drummer.fullname}</p>
        <p>Genre: {drummer.genre}</p>
        <p>Active?: {drummer.active}</p>
        <p>How many active bands?: {drummer.number}</p>
        <p>Bands: {drummer.bands}</p>
      </React.Fragment>
      ): <p></p>
    );
  }
}

function mapStateToProps(state) {
  return {
    drummers: state.drummers
  };
}

export default connect(mapStateToProps)(Artist);
