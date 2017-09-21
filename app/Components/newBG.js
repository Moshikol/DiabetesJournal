import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';

class newBG extends Component {

    btnonPress() {
        Alert.alert('YOU PUSHEEDD MEE !!!');
    }
    render() {
        const { textStyle, viewStyle, buttonStyle } = styles;
        return (

            <View style={viewStyle}>
                <Text style={textStyle}> {this.props.Headertxt} </Text>
               

            </View>

        );
    }

}


export default Header;

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
