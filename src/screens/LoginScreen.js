import React, { Component } from 'react';
import * as Routes from '../constants/routes';
import {
    LoginContainer
} from '../components/containers/LoginContainer';

 class LoginScreen extends Component {
  render() {
    return (
      <LoginContainer navigation={this.props.navigation}/>
    );
  }
}

export default LoginScreen;