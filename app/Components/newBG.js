import React, { Component } from 'react';
import { Text, View, Alert, TextInput, Linking, Image, ActivityIndicator } from 'react-native';
import SubmitButton from 'react-native-submit-button';
import Toast from 'react-native-simple-toast';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import { Button, Icon } from 'react-native-elements';
import firebase from 'firebase';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob'
import moment from 'moment';

class NewBG extends Component {

    constructor(props) {
        super(props);
        this.state = { bgVal: '', carbsAm: '', insUn: '', desc: '', imgsrc: '', actloading: null };

    }
  
    //#region Functions
    //Save to db 
    SaveBG() {

        const BG = { bgVal, carbsAm, insUn, desc, imgsrc } = this.state;
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/Bglst`)
            .push({ BG }).then(this.onSaveSuccess.bind(this));
    }
    //Gets Toast and reset state
    onSaveSuccess() {
        Toast.show('Bg Saved Successfully!', Toast.SHORT);
        this.setState({ bgVal: '', carbsAm: '', insUn: '', desc: '', imgsrc: '', actloading: null });
    }
    //Opens link Carbs Help
    HelpCarbs() {
        Linking.openURL('http://www.foodsdictionary.co.il')
    }

    //Open Camera/Gallery and upload picture to FireBase
    TakePic() {
        //#region declerations
        const { currentUser } = firebase.auth();
        const Blob = RNFetchBlob.polyfill.Blob;
        const fs = RNFetchBlob.fs;
        window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
        window.Blob = Blob;
        //#endregion


        ImagePicker.showImagePicker((image) => {
            //#region declerations
            const imagePath = image.path
            let uploadBlob = null
            let date = moment.unix(moment.now());
            const imageRef = firebase.storage().ref(currentUser.uid).child(`Bg${date}.jpg`) //check here what to do with the name
            let mime = 'image/jpg'
            //#endregion

            if (imagePath)
                this.setState({ actloading: true });
            else
                this.setState({ actloading: false });

            fs.readFile(imagePath, 'base64')
                .then((data) => {
                    return Blob.build(data, { type: `${mime};BASE64` })
                })
                .then((blob) => {
                    uploadBlob = blob
                    return imageRef.put(blob, { contentType: mime })
                })
                .then((url) => {
                    this.setState({ imgsrc: url.downloadURL, actloading: false });
                });
        });
    }

    ShowImage(self) {
        if (!(self.state.actloading)) {
            return (
                <View style={{ paddingRight: 0, paddingTop: 2 }}>
                    <Image
                        style={{ width: 40, height: 40, marginRight: 6, marginBottom: 4, marginTop: 2.5, marginLeft: 2, borderRadius: 100 }}
                        source={{ uri: self.state.imgsrc }}>
                    </Image>
                </View>
            );
        }
        else {
            return (
                <View style={{ paddingRight: 10, paddingTop: 16 }}>
                    <ActivityIndicator animating={self.state.loading} />
                </View>
            );

        }
    }
    //#endregion
    
    render() {
        const { textStyle, viewStyle, buttonStyle } = styles;
        return (

            <View style={{ justifyContent: 'flex-start' }}>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderColor: 'red', width: 100, paddingLeft: 10, fontSize: 20 }}
                    onChangeText={(bgVal) => this.setState({ bgVal })}
                    value={this.state.bgVal}
                    maxLength={3}
                    placeholder={'Enter BG'}
                />
                {/* CarbsSection image link and take photo */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput
                        keyboardType={'numeric'}
                        maxLength={3}
                        style={{ paddingLeft: 10, fontSize: 20, width: 250 }}
                        onChangeText={(carbsAm) => this.setState({ carbsAm })}
                        value={this.state.carbsAm}
                        placeholder={'Enter Carbs Amount'}
                    />
                    {/*  btn Help Carbs link */}
                    <Icon
                        style={{ paddingRight: 1, paddingTop: 12 }}
                        name='help'
                        color='grey'
                        size={30}
                        onPress={this.HelpCarbs.bind(this)}
                    />
                    {/* TakePicture btn */}
                    <Icon
                        style={{ paddingRight: 1, paddingTop: 12 }}
                        name='camera-alt'
                        color={this.state.imgsrc ? '#00d311' : 'grey'}
                        size={30}
                        onPress={this.TakePic.bind(this)}
                    />
                    {/* Image That Uploaded */}

                    {this.ShowImage(this)}

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


            </View >

        );
    }

}
export default NewBG;
//#region Styles
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
//#endregion