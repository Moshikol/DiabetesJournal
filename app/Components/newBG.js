import React, { Component } from 'react';
import { Text, View, Alert, TextInput, Linking } from 'react-native';
import SubmitButton from 'react-native-submit-button';
import Toast from 'react-native-simple-toast';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import { Button, Icon } from 'react-native-elements';
import firebase from 'firebase';

class NewBG extends Component {

    constructor(props) {
        super(props);
        this.state = { bgVal: '', carbsAm: '', insUn: '', desc: '' };
      
    }



    SaveBG() {
        firebase.database.ref().push({'test':'test'});
        Toast.show('Bg Saved Successfully!', Toast.SHORT);

    }

    HelpCarbs() {
        Linking.openURL('http://www.foodsdictionary.co.il')
    }

    render() {
        const { textStyle, viewStyle, buttonStyle } = styles;
        return (

            <View style={{ justifyContent: 'flex-start' }}>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderColor: 'red', width: 100, paddingLeft: 10, fontSize: 20 }}
                    onChangeText={(bgVal) => this.setState({ bgVal })}
                    value={this.state.bGVal}
                    maxLength={3}
                    placeholder={'Enter BG'}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput
                        keyboardType={'numeric'}
                        maxLength={3}
                        style={{ paddingLeft: 10, fontSize: 20, width: 250 }}
                        onChangeText={(carbsAm) => this.setState({ carbsAm })}
                        value={this.state.carbsAm}
                        placeholder={'Enter Carbs Amount'}
                    />
                    <Icon
                        style={{ paddingRight: 100, paddingTop: 12 }}
                        name='help'
                        color='grey'
                        size={30}
                        onPress={this.HelpCarbs.bind(this)}
                    />


                </View>

                <TextInput
                    keyboardType={'numeric'}
                    style={{ paddingLeft: 10, fontSize: 20 }}
                    onChangeText={(insUn) => this.setState({ insUn })}
                    value={this.state.insUn}
                    maxLength={5}
                    placeholder={'Enter Insulin Uinits Amount'}
                />

                <TextInput
                    multiline={true}
                    style={{ borderColor: 'red', width: 300, paddingLeft: 10, fontSize: 20 }}
                    onChangeText={(desc) => this.setState({ desc })}
                    value={this.state.desc}
                    placeholder={'Enter Meal Description'}
                />
                <View style={{ borderRadius: 10, marginTop: 20 }}>
                    {/* <SubmitButton /> */}
                    <Button
                        icon={{ name: 'opacity', size: 32, color: 'red' }}
                        buttonStyle={{ backgroundColor: '#2bce81', borderRadius: 40 }}
                        textStyle={{ textAlign: 'center', fontSize: 25 }}
                        title={`Save BG    `}
                        onPress={this.SaveBG.bind(this)}
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
