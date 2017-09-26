import React, { Component } from 'react';
import { Text, View, Alert, TextInput,Linking } from 'react-native';
import SubmitButton from 'react-native-submit-button';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import { Button } from 'react-native-elements';

class NewBG extends Component {

    constructor(props) {
        super(props);
        this.state = { bGVal: '', carbsAm: '', insUn: '', desc: '' };
    }

    SaveBG () {
       Linking.openURL('http://www.foodsdictionary.co.il')
    }

    HelpCarbs () {
       Linking.openURL('http://www.foodsdictionary.co.il')
    }
    
    render() {
        const { textStyle, viewStyle, buttonStyle } = styles;
        return (

            <View style={{ justifyContent: 'flex-start' }}>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderColor: 'red', width: 100, paddingLeft: 10, fontSize: 20 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.bGVal}
                    maxLength={3}
                    placeholder={'Enter BG'}
                />
                <TextInput
                    keyboardType={'numeric'}
                      maxLength={3}
                    style={{ paddingLeft: 10, fontSize: 20 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.carbsAm}
                    placeholder={'Enter Carbs Amount'}
                />

                <TextInput
                    keyboardType={'numeric'}
                    style={{ paddingLeft: 10, fontSize: 20 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.insUn}
                    maxLength={3}
                    placeholder={'Enter Insulin Uinits Amount'}
                />

                <TextInput
                    multiline={true}
                    style={{ borderColor: 'red', width: 300, paddingLeft: 10, fontSize: 20 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.desc}
                    placeholder={'Enter Meal Description'}
                />
                <View style={{ borderRadius: 10,marginTop:20 }}>
                    {/* <SubmitButton /> */}
                    <Button
                        icon={{ name: 'opacity', size: 32, color: 'red' }}
                        buttonStyle={{ backgroundColor: '#2bce81', borderRadius: 40 }}
                        textStyle={{ textAlign: 'center', fontSize: 25 }}
                        title={`Save BG    `}
                        onPress={this.SaveBG}
                    />
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
