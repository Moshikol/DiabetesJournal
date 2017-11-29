import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View, Alert, TextInput, Linking, ListView } from 'react-native';
import SubmitButton from 'react-native-submit-button';
import Toast from 'react-native-simple-toast';
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
            //  //console.log(snap.val());
            snap.forEach((bg) => {
                //  //console.log(bg);
                items.push({
                    bgVal: bg.val().BG.bgVal,
                    carbsAm: bg.val().BG.carbsAm,
                    desc: bg.val().BG.desc,
                    imgsrc: bg.val().BG.imgsrc,
                    insUn: bg.val().BG.insUn,
                    _key: bg.key
                })
            });
            // //console.log('items');
            //console.log(items);
            this.setState({ dataSource: this.state.dataSource.cloneWithRows(items) });
        });
    }

    componentDidMount() {
        this.getitems(this.itemsRef);
    }
    componentWillMount() {
        this.getitems(this.itemsRef);
    }



    renderBG(self) {
        //console.log("self.state.bglst");
        //console.log(self.state.bglst);
        // return <Bglistitem BG={BG} />
        if (self.state.bglst) {
            return (

                self.state.bglst.map(bg => {
                    //console.log(bg);
                    <Bglistitem BG={bg} />
                }
                ));
        }
    }

    renderItem(item) {
       // console.log('item');
       // console.log(item);
        return (
            <View>
                <Bglistitem BG={item} />
            </View>

        );
    }


    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderItem.bind(this)}
                    style={styles.listview} />
            </View>

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
