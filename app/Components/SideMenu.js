import React, { Component, PropTypes } from "react";
import { StyleSheet, Text, View, ViewPropTypes, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import Button from "react-native-button";
import { CardSection } from "./common/CardSection";
import Toast from "react-native-simple-toast";
import firebase from "firebase";
import {
  Avatar,
  Drawer,
  Divider,
  COLOR,
  TYPO
} from "react-native-material-design";
const contextTypes = {
  drawer: React.PropTypes.object
};

const propTypes = {
  name: PropTypes.string,
  sceneStyle: ViewPropTypes.style,
  title: PropTypes.string
};

class SideMenu extends Component {
  SignOut() {
    firebase.auth().signOut();
    Actions.auth();
  }

  render() {
    return (
      <Drawer theme="light">
        <Drawer.Header
          image={<Image source={require("../Resources/img/nav.jpg")} />}
        >
          <View style={styles.header}>
            <Text style={[styles.text, COLOR.paperGrey50]}>
              Diabetes Jouranl
            </Text>
          </View>
        </Drawer.Header>

        <Drawer.Section
          title="Pages"
          items={[
            {
              icon: "data-usage",
              value: "DashBoard",
              active: "avatars",
              onPress: () => Actions.dashboard(),
              onLongPress: () =>
                Toast.show("Not implemented Yet Sorry :D", Toast.SHORT)
            },
            {
              icon: "list",
              value: "BG History",
              active: "buttons",
              onPress: () => Actions.bglst(),
              onLongPress: () =>
                Toast.show("Not implemented Yet Sorry :D", Toast.SHORT)
            },
            {
              icon: "add-location",
              value: "Add New BG",
              style: { transform: [{ rotate: "180deg" }] },
              active: "checkboxes",
              onPress: () => Actions.newbg(),
              onLongPress: () =>
                Toast.show("Not implemented Yet Sorry :D", Toast.SHORT)
            },
            {
              icon: "add-alarm",
              value: "Add Remainder",
              active: "dividers",
              onPress: () =>
                Toast.show("Not implemented Yet Sorry :D", Toast.SHORT),
              onLongPress: () =>
                Toast.show("Not implemented Yet Sorry :D", Toast.SHORT)
            },
            {
              icon: "exposure",
              value: "Bolus Calculator",
              active: "icon-toggles",
              onPress: () =>
                Toast.show("Not implemented Yet Sorry :D", Toast.SHORT),
              onLongPress: () =>
                Toast.show("Not implemented Yet Sorry :D", Toast.SHORT)
            }
            // {
            //   icon: "radio-button-checked",
            //   value: "Radio Buttons",
            //   label: "8",
            //   active: "radio-buttons",
            //   onPress: () => this.changeScene("radio-buttons"),
            //   onLongPress: () => this.changeScene("radio-buttons")
            // },

            // {
            //   icon: "label",
            //   value: "Subheaders",
            //   label: "4",
            //   active: "subheaders",
            //   onPress: () => this.changeScene("subheaders"),
            //   onLongPress: () => this.changeScene("subheaders")
            // }
          ]}
        />
        <Divider style={{ marginTop: 8 }} />
        <Drawer.Section
          title="Config"
          items={[
            {
              icon: "settings",
              value: "Settings",
              onPress: () =>
                Toast.show("Not implemented Yet Sorry :D", Toast.SHORT),
              onLongPress: () =>
                Toast.show("Not implemented Yet Sorry :D", Toast.SHORT)
            },
            {
              icon: "invert-colors",
              value: "Sign Out",
              active: "themes",
              onPress: () => this.SignOut(),
              onLongPress: () =>
                Toast.show("Not implemented Yet Sorry :D", Toast.SHORT)
            }
          ]}
        />
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#fff"
  },
  container: {
    padding: 15,
    height: 45,
    overflow: "hidden",
    alignSelf: "flex-start"
  },
  textStyle: {
    fontSize: 18,
    color: "#555"
  },
  nameContainer: {
    padding: 15,
    height: 45,
    overflow: "hidden",
    alignSelf: "flex-start"
  },
  name: {
    fontSize: 22,
    color: "#555",
    fontWeight: "400"
  },
  header: {
    paddingTop: 16
  },
  text: {
    fontSize: 30,
    marginTop: 80
  }
});

SideMenu.contextTypes = contextTypes;
SideMenu.propTypes = propTypes;

export default SideMenu;
