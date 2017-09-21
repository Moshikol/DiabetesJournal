import React, { Component } from 'react';
import { Text, View, Button, Alert, TextInput } from 'react-native';

class NewBG extends Component {
  
    constructor(props) {
        super(props);
        this.state = { text: '' };
      }

    render() {
        const { textStyle, viewStyle, buttonStyle } = styles;
        return (

            <View style={{ alignContent:'flex-end'}}>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ height: 40, borderColor: 'gray' ,width: 60}}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder ={'הכנס בדיקת סוכר'}
                    


                />


            </View>

        );
    }

}


export default NewBG;

const styles = {

    viewStyle:
    {
        backgroundColor: '#ccffd1',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        elevation: 5,
        position: 'relative'
    },
    textStyle:
    {
        fontSize: 40
    },

    buttonStyle:
    {

        alignItems: 'left',
    },


};
