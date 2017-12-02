import _ from 'lodash';
import React, { Component } from 'react';
import {
    Text, View, Alert, TextInput, Linking, Dimensions,
    Button,
    Image,
    TouchableOpacity
    , ListView
} from 'react-native';
import SubmitButton from 'react-native-submit-button';
import Toast from 'react-native-simple-toast';
import ActionButton from 'react-native-action-button';
import { Actions } from 'react-native-router-flux';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import { Icon } from 'react-native-elements';
import firebase from 'firebase';
import Bglistitem from './Bglistitem.js';
const background = require("../Resources/img/login1_bg.png");
const { width, height } = Dimensions.get("window");
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
            <View style={styles.container}>
                <Image source={background} style={styles.background} resizeMode="cover">
                    <ListView
                        enableEmptySections
                        scrollEnabled={true}
                        dataSource={this.state.dataSource}
                        renderRow={this.renderItem.bind(this)}
                        style={styles.listview} /> 
                    <ActionButton buttonColor='#4FEB49'  style={{marginBottom:25,marginRight:-20}} position="right" title="New BG" onPress={Actions.newbg} />

                </Image>
            </View>

        );

    }

}
export default BgList;

const styles = {

    container: {
        flex: 1,
        
    },
    markWrap: {
        flex: 1,
        paddingVertical: 30,
    },
    mark: {
        width: null,
        height: null,
        flex: 1,
    },
    background: {
        width,
        height,
    },
    wrapper: {
        paddingVertical: 30,
    },
    inputWrap: {
        flexDirection: "row",
        marginVertical: 10,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#CCC"
    },
    iconWrap: {
        paddingHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        height: 20,
        width: 20,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: "#FF3366",
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
    },
    forgotPasswordText: {
        color: "#D8D8D8",
        backgroundColor: "transparent",
        textAlign: "right",
        paddingRight: 15,
    },
    signupWrap: {
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    accountText: {
        color: "#D8D8D8"
    },
    signupLinkText: {
        color: "#FFF",
        marginLeft: 5,
    },
    viewStyle:
        {
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 1
        },
    listview:
        {
            borderRadius: 5,
            marginBottom:50,
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
