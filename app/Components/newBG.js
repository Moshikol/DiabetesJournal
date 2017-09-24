import React, { Component } from 'react';
import { Text, View, Alert, TextInput } from 'react-native';
import SubmitButton from 'react-native-submit-button';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';


class NewBG extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        const { textStyle, viewStyle, buttonStyle } = styles;
        return (

            <View style={{ justifyContent: 'flex-start' }}>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderColor: 'red', width: 100, paddingLeft: 10, fontSize: 20 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    maxLength={3}
                    placeholder={'Enter BG'}
                />
                <TextInput
                    keyboardType={'numeric'}
                    maxLength={3}
                    style={{ paddingLeft: 10, fontSize: 20 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder={'Enter Carbs Amount'}
                />

                <TextInput
                    keyboardType={'numeric'}
                    style={{ paddingLeft: 10, fontSize: 20 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    maxLength={3}
                    placeholder={'Enter Insulin Uinits Amount'}
                />

                <TextInput
                    multiline={true}
                    style={{ borderColor: 'red', width: 300, paddingLeft: 10, fontSize: 20 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder={'Enter Meal Description'}
                />
                <View style={{ textStyle:'Arial', paddingTop: 10, flex: 1 }}>
                {/* <SubmitButton /> */}
                <TextButton titleColor={rgb(43, 206, 129)}  titleStyle={{fontSize: 20} } title='do not touch me'  />
                </View>
               
                   
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
