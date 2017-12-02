import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View, Alert, TextInput, Linking, ListView } from 'react-native';
import SubmitButton from 'react-native-submit-button';
import Toast from 'react-native-simple-toast';
import ActionButton from 'react-native-action-button';
import { Actions } from 'react-native-router-flux';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import { Button, Icon } from 'react-native-elements';
import firebase from 'firebase';
import Bglistitem from './Bglistitem.js';


class BgList extends Component {

    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
        this.state = {
            dataSource: ds
        };
        const { currentUser } = firebase.auth();
        this.itemsRef = firebase.database().ref(`/users/${currentUser.uid}/Bglst`);


    }
    getitems(itemsRef) {
        itemsRef.on('value', snap => {
            let items = [];
            snap.forEach((bg) => {
                items.push({
                    bgVal: bg.val().BG.bgVal,
                    carbsAm: bg.val().BG.carbsAm,
                    desc: bg.val().BG.desc,
                    imgsrc: bg.val().BG.imgsrc,
                    insUn: bg.val().BG.insUn,
                    _key: bg.key
                })
            });

            this.setState({ dataSource: this.state.dataSource.cloneWithRows(items) });
        });
    }

    componentDidMount() {
        this.getitems(this.itemsRef);
    }
    componentWillMount() {
        this.getitems(this.itemsRef);
    }

    renderItem(item) {

        return (
            <View>
                <Bglistitem BG={item} />
            </View>

        );
    }


    render() {
        return (
            <View style={styles.viewStyle}>
                <ListView
                    enableEmptySections
                    scrollEnabled={true}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderItem.bind(this)}
                    style={styles.listview} />
                <ActionButton buttonColor='#4FEB49' position="right" title="New Task" onPress={Actions.newbg} />


            </View>

        );

    }

}
export default BgList;

const styles = {

    viewStyle:
        {
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 1
        },
    listview:
        {
            height: 630
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
