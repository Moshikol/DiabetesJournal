import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { Header } from 'react-native-elements';

class myHeader extends Component {

  
    render() {
        const { textStyle, viewStyle, buttonStyle } = styles;
        return (

            <View style={viewStyle}>

                <Header
                    statusBarProps={{ barStyle: 'dark-content' ,backgroundColor: '#aae8ff'}}
                    leftComponent={{ icon: 'menu', color: 'grey', size: 30 }}
                    centerComponent={{ text: this.props.Headertxt, style: styles.textStyle }}
                    rightComponent={{ icon: 'home', color: 'grey', size: 30 }}
                />

            </View>

        );
    }

}


export default myHeader;

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
        justifyContent: 'center',
        fontSize: 35,

    },

};
