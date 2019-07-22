import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ButtonWrapper = (props) => (
  <TouchableOpacity 
    {...props}
    style={props.style ? props.style :{
      backgroundColor: "#60bcf4",
      width: 'auto',
      minWidth: 300,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: "transparent",
      borderWidth: 0,
      borderRadius: 4,
    }}
  >
    <Text style={{
      color: 'white',
      fontWeight: 'bold',
      fontSize: props.fontSize ? parseInt(props.fontSize,10) : 20,
      textAlign:'center'
    }}>{props.title}</Text>
  </TouchableOpacity>
)

export default ButtonWrapper;