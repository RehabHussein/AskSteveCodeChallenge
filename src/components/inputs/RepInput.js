import React from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';
class RepInput extends React.Component {
    render() {
        return (<View style={{ padding: 10 }}>
            <TextInput
            style={{ height: 40, fontSize: 20 ,borderWidth:1 , borderRadius:4 ,  borderColor: "#60bcf4"}}
               
                placeholder="Repository title"
                onChangeText={(txtRep) => { this.setState({ txtRep }); this.props.updateTextRep(txtRep.trim()) }}
                value={this.state.txtRep}
            />
            <Text ></Text>
        </View>);
    }
    constructor(props) {
        super(props);
        this.state = {
            txtRep: 'facebook/react-native'
        }
    }
}
export default RepInput;
