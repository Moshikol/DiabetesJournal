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
import Header from './app/Components/header.js';
import NewBG from './app/Components/newBG.js';

export default class DiabetesJournal extends Component {
  render() {
    return (
      <View >
        <Header Headertxt={'BG Journal'}/>
        <NewBG/>
      </View>
    );
  }
}



AppRegistry.registerComponent('DiabetesJournal', () => DiabetesJournal);
