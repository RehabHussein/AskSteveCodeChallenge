import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import RepInput from '../inputs/RepInput';
import { SubmitButton } from '../buttons/SubmitButton';
import {LogoutButton} from '../buttons/LogoutButton';


class GetRepContainer extends React.Component {
  render() {
    return (<View >
      <LogoutButton {...this.props}/>
      <RepInput {...this.props} updateTextRep={this.updateTextRep.bind(this)} />
      <SubmitButton {...this.props} rep={this.state.txtRep} />
    </View>)
      ;
  }
  constructor(props) {
    super(props);
    this.state = {
      txtRep: 'facebook/react-native'
    }
  }
  updateTextRep(text) {
    this.setState({ txtRep: text });
  }
}
export default GetRepContainer;
