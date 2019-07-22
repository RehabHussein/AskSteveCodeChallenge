import React from 'react';
import {
  View, Linking
} from 'react-native';
import { WebBrowser } from 'expo';
import ButtonWrapper from './buttonWrapper';
import {  COMMITS_LIST_VIEW_SCREEN } from '../../constants/routes';

export  const SubmitButton = (props) => (
  <View >
    <ButtonWrapper title="Submit" onPress={() => _getRepsotoryCommits(props)} />
  </View>
)
_getRepsotoryCommits =  (props) => {
//     const options = {
//         method: 'GET',
//         headers: {
//           'Authorization': 'token '+props.navigation.getParam('accessToken'),
//           'User-Agent': 'f4bf481c60d58fa1c3fb'
//         }
//     }
//   fetch(`https://api.github.com/repos/${props.rep}/commits`, options)
//   .then(result =>result.json())
//   .then(data => 
//     {if (Array.isArray(data))
//         {
//             console.log('here');
//             props.navigation.push(COMMITS_LIST_VIEW_SCREEN,{commitsList : data,accessToken:props.navigation.getParam('accessToken')});
//         }
// else console.log('an error in fetching the commits occured');})
//   .catch();

props.navigation.push(COMMITS_LIST_VIEW_SCREEN,{rep : props.rep,accessToken:props.navigation.getParam('accessToken')});
}

