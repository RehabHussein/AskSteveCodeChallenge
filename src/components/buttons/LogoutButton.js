import React from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonWrapper from './buttonWrapper';
import { LOGIN_SCREEN } from '../../constants/routes';
import { StackActions, NavigationActions } from 'react-navigation';
import { Constants } from 'expo';

export const LogoutButton = (props) => (
  <View style={styles.instContainer}>
    <ButtonWrapper style={styles.btn} fontSize='15' title="Logout" onPress={() => Logout(props.navigation)} />
  </View>
)
const Logout = (navigation) => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: LOGIN_SCREEN })],
  });
  navigation.dispatch(resetAction);
}
const styles = StyleSheet.create({
  instContainer: {
    paddingTop: Constants.statusBarHeight,
  },
  btn: {
    alignSelf: 'flex-end',
   // textAlign:"center",
    backgroundColor: "#055777",
    margin: '1%',
    padding: '1%',
    width: 60,
    height: 30,
    
  }
}
)