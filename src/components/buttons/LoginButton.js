import React from 'react';
import {View, Linking,StyleSheet} from 'react-native';
import { WebBrowser } from 'expo';
import ButtonWrapper from './buttonWrapper';
import { GET_REP_SCREEN } from '../../constants/routes';
import {CLEINT_SECRET,CLIENT_ID,AUTH_URL,TOKEN_URL} from '../../constants/EnviromentVariables'; 

export const LoginButton = (props) => (
  <View style={styles.btn}>
    <ButtonWrapper title="Login With Github" onPress={() => _openAuthSessionAsync(props.navigation)} />
  </View>
)
_openAuthSessionAsync = async (navigation) => {
  const redirect = await Linking.getInitialURL('')
  const result = await WebBrowser.openAuthSessionAsync(
    `${AUTH_URL}?client_id=${CLIENT_ID}`
  )
  if(result.type === 'success' && result.url.includes('?code=') )
   {
    const code = result.url.substring(result.url.indexOf('=') + 1);
    console.log(code);
    const options = {
      method: 'POST',
      body: `client_id=${CLIENT_ID}&client_secret=${CLEINT_SECRET}&code=${code}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With' :'XMLHttpRequest',
        'Accept': 'application/json'
      }
    }
  fetch(TOKEN_URL, options)
  .then(result =>result.json())
  .then(({access_token}) => {
    console.log(access_token); 
     navigation.navigate(GET_REP_SCREEN,{accessToken:access_token});
    })
  .catch(err=> console.log(err));
}

 else console.log('error happened')

}

const styles = StyleSheet.create({
 btn:{
  marginTop: '10%'}
})
