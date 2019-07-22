import React, { Component } from 'react';
import * as Routes from '../constants/routes';
import CommitsListViewContainer from '../components/containers/CommitsListViewContainer';

class CommitsListViewScreen extends Component {
  render() {
    return (
      <CommitsListViewContainer navigation={this.props.navigation} />
    );
  }
  constructor(props){
    super(props);
  }
}

export default CommitsListViewScreen;