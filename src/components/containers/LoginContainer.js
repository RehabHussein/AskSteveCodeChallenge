import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Constants } from 'expo';
import { LoginButton } from '../buttons/LoginButton';


const styles = StyleSheet.create({
  instHeader: {
    textAlign: 'center',
    color: '#055777',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '5%'
  },
  instContainer: {
    fontSize: 15,
    margin: '5%',
    padding: '5%',
    paddingTop: Constants.statusBarHeight,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#055777',
    borderRadius: 5,
    backgroundColor: '#f4f2ef',
  },
  inst: {
    marginTop: '2%',
  }
}
)

export const LoginContainer = (props) => (
  <View style={styles.instContainer} >
    <View style={styles.instContainer}>
    <Text style={styles.instHeader}>Application General Information</Text>
    <View style={styles.inst}>
    <Text>This app is designed to get all the commits on a github repository</Text>
    <Text>You will be asked
    to enter your github login username and password then you can enter the required github name!</Text>
    <Text>That's it!</Text>
    </View>
    </View>
    <LoginButton {...props} />
  </View>

)

