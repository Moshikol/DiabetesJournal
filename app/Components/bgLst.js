import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View, Alert, TextInput, Linking, ListView } from 'react-native';
import SubmitButton from 'react-native-submit-button';
import Toast from 'react-native-simple-toast';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import { Button, Icon } from 'react-native-elements';
import firebase from 'firebase';
import Bglistitem from './Bglistitem.js'


class BgList extends Component {

    constructor(props) {
        super(props);
        this.state = { bglst: [] };



    }

    componentWillMount() {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/Bglst`)
            .on('value', snap => {

                this.state.bglst = snap.val();
                console.log(snap.val());
                const ds = new ListView.DataSource({
                    rowHasChanged: (r1, r2) => r1 !== r2
                });
                this.dataSource = ds.cloneWithRows(this.state.bglst);
                console.log(this.dataSource);
            });

        console.log(this.state.bglst)
    }



    HelpCarbs() {
        Linking.openURL('http://www.foodsdictionary.co.il')
    }
    ShowLst(self) {
        const bgs = _.map(this.state.bglst, (val, uid) => {

            return { ...val, uid };
        });
        console.log('bgs');
        console.log(bgs);
        return { bgs };
    };


    renderBG({ BG }) {
        console.log(BG)
        return <Bglistitem BG={BG} />
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderBG} />
        );

    }

}
export default BgList;

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
