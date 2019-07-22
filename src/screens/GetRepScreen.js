import React, { Component } from 'react';
import * as Routes from '../constants/routes';
import GetRepContainer from '../components/containers/GetRepContainer';

class GetRepScreen extends Component {
  render() {
    return (
      <GetRepContainer navigation={this.props.navigation} />
    );
  }
  constructor(props){
    super(props);
  }
}

export default GetRepScreen;