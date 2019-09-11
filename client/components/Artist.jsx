import React from 'react';
import { getDrummerInfo } from '../api';

class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drummer: {}
    };
  }

  loadDrummer() {
    getDrummerInfo().then(result => {
      let data = result.body;
      let { id } = this.props.match.params;
      let drummer = data.find(item => {
        return id == item.id;
      });
      this.setState({
        drummer: drummer
      });
    });
  }

  componentDidMount() {
      this.loadDrummer()
  }

  componentWillReceiveProps() {
    this.loadDrummer();
  }

  render() {
    const { drummer } = this.state;
    return (
      <React.Fragment>
        <p>Fullname: {drummer.fullname}</p>
        <p>Genre: {drummer.genre}</p>
        <p>Active?: {drummer.active}</p>
        <p>How many active bands?: {drummer.number}</p>
        <p>Bands: {drummer.bands}</p>
      </React.Fragment>
    );
  }
}

export default Artist;
