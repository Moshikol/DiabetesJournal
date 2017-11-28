/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import firebase from 'firebase';
import Header from './app/Components/header.js';
import NewBG from './app/Components/newBG.js';
import LoginForm from './app/Components/LoginForm.js';
import Bglst from './app/Components/bgLst.js';




export default class DiabetesJournal extends Component {
  state = {
    isLoggedIn: false
  };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBgwVLxWeradAHjqw-5rMvLZ2_2NoZ0nKA",
      authDomain: "diabetesjournal-405cf.firebaseapp.com",
      databaseURL: "https://diabetesjournal-405cf.firebaseio.com",
      projectId: "diabetesjournal-405cf",
      storageBucket: "diabetesjournal-405cf.appspot.com",
      messagingSenderId: "750281915622"
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isLoggedIn: true });
      }
      else {
        this.setState({ isLoggedIn: false })
      }
    });
  };

  CompnentSelector(self) {
    
    if (self.state.isLoggedIn) {
      return(
        <View>
          <Header Headertxt={'BG Journal'} />
          <NewBG />
        </View>
      );
    }
    else {
      return(
        <View>
          <LoginForm />
        </View>
      );
    }
  };


  render() {
    return (
      <View>
        {this.CompnentSelector(this)}
      </View>
    );
  };
}



AppRegistry.registerComponent('DiabetesJournal', () => DiabetesJournal);
