//#region Imports
import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
//import { Button } from 'react-native-elements';
import Toast from "react-native-simple-toast";
import { Actions } from "react-native-router-flux";
import { Card, CardSection, Input, Spinner } from "./common";
import firebase from "firebase";
const { width, height } = Dimensions.get("window");

const background = require("../Resources/img/login1_bg.png");
const mark = require("../Resources/img/login1_mark.png");
const lockIcon = require("../Resources/img/login1_lock.png");
const personIcon = require("../Resources/img/login1_person.png");
//#endregion
class LoginForm extends Component {
  state = { email: "", pass: "", error: "", loading: false, isLoggedIn: false };

  onLogin() {
   
      this.setState({ error: "", loading: true });
      const { email, pass } = this.state;
      firebase
        .auth()
        .signInWithEmailAndPassword(email, pass)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, pass)
            .then(this.onRegister.bind(this))
            .catch(this.onLoginFailed.bind(this));
        });
   
  }

  onLoginFailed() {
    this.setState({ error: "Password Wrong", loading: false });
  }
  onLoginSuccess() {
    Toast.show("You logged in Successfully!", Toast.LONG);
    this.setState({
      error: "",
      loading: false,
      email: "",
      pass: ""
    });
    Actions.bglst();
  }

  onRegister() {
    Toast.show("You Registerd Successfully!", Toast.SHORT);
    this.setState({
      error: "",
      loading: false,
      email: "",
      pass: "" //add here a comfirmation for password
    });
  }

  renderBtn() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <TouchableOpacity onPress={this.onLogin.bind(this)} activeOpacity={0.5}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={background} style={styles.background} resizeMode="cover">
          <View style={styles.markWrap}>
            <Image source={mark} style={styles.mark} resizeMode="contain" />
          </View>
          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image
                  source={personIcon}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                placeholder="Username"
                keyboardType="email-address"
                placeholderTextColor="#FFF"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
                style={styles.input}
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image
                  source={lockIcon}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                placeholderTextColor="#FFF"
                placeholder="Password"
                style={styles.input}
                secureTextEntry
                onChangeText={pass => this.setState({ pass })}
                value={this.state.pass}
              />
            </View>
            <TouchableOpacity activeOpacity={0.5}>
              <View>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </View>
            </TouchableOpacity>
            {this.renderBtn()}
          </View>
          <View style={styles.container}>
            <View style={styles.signupWrap}>
              <Text style={styles.accountText}>Don't have an account?</Text>
              <TouchableOpacity activeOpacity={0.5}>
                <View>
                  <Text style={styles.signupLinkText}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Image>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30
  },
  mark: {
    width: null,
    height: null,
    flex: 1
  },
  background: {
    width,
    height
  },
  wrapper: {
    paddingVertical: 30
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
    justifyContent: "center"
  },
  icon: {
    height: 40,
    width: 40
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#FFF"
  },
  button: {
    backgroundColor: "#29A642",
    paddingVertical: 20,
    marginLeft: 30,
    marginRight: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5
  }
});
export default LoginForm;
