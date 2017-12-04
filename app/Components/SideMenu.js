import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, ViewPropTypes, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import { CardSection } from './common/CardSection';
import firebase from 'firebase';
import { Avatar, Drawer, Divider, COLOR, TYPO } from 'react-native-material-design';
const contextTypes = {
    drawer: React.PropTypes.object,
};

const propTypes = {
    name: PropTypes.string,
    sceneStyle: ViewPropTypes.style,
    title: PropTypes.string,
};


class SideMenu extends Component {


    SignOut() {
        firebase.auth().signOut();
        Actions.auth();
    }

    render() {
        return (

            <Drawer theme='light'>
                <Drawer.Header image={<Image source={require('../Resources/img/nav.jpg')} />}>
                    <View style={styles.header}>

                        <Text style={[styles.text, COLOR.paperGrey50]}>Diabetes Jouranl</Text>
                    </View>
                </Drawer.Header>



                <Drawer.Section
                    title="Components"
                    items={[{
                        icon: 'data-usage',
                        value: 'DashBoard',
                        label: '14',
                        active: 'avatars',
                        onPress: () => this.changeScene('avatars'),
                        onLongPress: () => this.changeScene('avatars')
                    }, {
                        icon: 'list',
                        value: 'BG History',
                        active: 'buttons',
                        onPress: () => this.changeScene('buttons'),
                        onLongPress: () => this.changeScene('buttons')
                    }, {
                        icon: 'check-box',
                        value: 'Checkboxes',
                        label: '10',
                        active: 'checkboxes',
                        onPress: () => this.changeScene('checkboxes'),
                        onLongPress: () => this.changeScene('checkboxes')
                    }, {
                        icon: 'label',
                        value: 'Dividers',
                        label: '10',
                        active: 'dividers',
                        onPress: () => this.changeScene('dividers'),
                        onLongPress: () => this.changeScene('dividers')
                    }, {
                        icon: 'label',
                        value: 'Icon Toggles',
                        label: 'NEW',
                        active: 'icon-toggles',
                        onPress: () => this.changeScene('icon-toggles'),
                        onLongPress: () => this.changeScene('icon-toggles')
                    }, {
                        icon: 'radio-button-checked',
                        value: 'Radio Buttons',
                        label: '8',
                        active: 'radio-buttons',
                        onPress: () => this.changeScene('radio-buttons'),
                        onLongPress: () => this.changeScene('radio-buttons')
                    },

                    {
                        icon: 'label',
                        value: 'Subheaders',
                        label: '4',
                        active: 'subheaders',
                        onPress: () => this.changeScene('subheaders'),
                        onLongPress: () => this.changeScene('subheaders')
                    }]}
                />
                <Divider style={{ marginTop: 8 }} />
                <Drawer.Section
                    title="Config"
                    items={[{
                        icon: 'invert-colors',
                        value: 'Sign Out',
                        active: 'themes',
                        onPress: () => this.SignOut(),
                        onLongPress: () => this.changeScene('themes')
                    }]}
                />

            </Drawer>
        );
    }
}


const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        padding: 15,
        height: 45,
        overflow: 'hidden',
        alignSelf: 'flex-start',
    },
    textStyle: {
        fontSize: 18,
        color: '#555',
    },
    nameContainer: {
        padding: 15,
        height: 45,
        overflow: 'hidden',
        alignSelf: 'flex-start',
    },
    name: {
        fontSize: 22,
        color: '#555',
        fontWeight: '400',
    },
    header: {
        paddingTop: 16
    },
    text: {
        fontSize:30,
        marginTop: 80
    }

});



SideMenu.contextTypes = contextTypes;
SideMenu.propTypes = propTypes;

export default SideMenu;