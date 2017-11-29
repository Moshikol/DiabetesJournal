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
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        };
        const { currentUser } = firebase.auth();
        this.itemsRef = firebase.database().ref(`/users/${currentUser.uid}/Bglst`);


    }

    componentDidMount() {
        this.setState({ dataSource: this.state.dataSource.cloneWithRows([{ title: 'Pizza' }]) });
        this.listenForItems(this.itemsRef);
    }
    componentWillMount() {
        // const { currentUser } = firebase.auth();
        // firebase.database().ref(`/users/${currentUser.uid}/Bglst`)
        //     .on('value', snap => {
        //         var items = [];
        //         snap.forEach((child) => {
        //             items.push({
        //                 title: child.val().title,
        //                 _key: child.key
        //             });
        //         });

        //         this.setState({
        //             dataSource: this.state.dataSource.cloneWithRows(items)
        //         });


        //#regiontest
        // this.state.bglst = snap.val();
        // console.log('snap.val()');
        // console.log(snap.val());
        // const ds = new ListView.DataSource({
        //     rowHasChanged: (r1, r2) => r1 !== r2
        // });
        // this.dataSource = ds.cloneWithRows(this.state.bglst);
        // // console.log(this.dataSource);
        //#endregion
        //  });


        //console.log(this.state.bglst)
    }

    listenForItems(itemsRef) {

        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/Bglst`)
            .on('value', snap => {
                var items = [];
                snap.forEach((child) => {
                    items.push({
                        title: child.val().title,
                        _key: child.key
                    });
                });

                //  this.setState({
                //     dataSource: this.state.dataSource.cloneWithRows(items)
                //  });
            });
    }
    ShowLst(self) {
        const bgs = _.map(this.state.bglst, (val, uid) => {

            return { ...val, uid };
        });
        console.log('bgs');
        console.log(bgs);
        return { bgs };
    };

    renderBG(self) {
        console.log("self.state.bglst");
        console.log(self.state.bglst);
        // return <Bglistitem BG={BG} />
        if (self.state.bglst) {
            return (

                self.state.bglst.map(bg => {
                    console.log(bg);
                    <Bglistitem BG={bg} />
                }
                ));
        }
    }

    _renderItem(item) {
        return (
            <ListItem item={item} />
        );
    }


    render() {
        return (
            <View>
                <Text>zubi obi</Text>
                <ListView
                    datasource={this.state.dataSource}
                    renderRow={this._renderItem.bind(this)}
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
