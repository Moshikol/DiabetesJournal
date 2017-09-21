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
  View
} from 'react-native';
import Header from './app/Components/header.js';

export default class DiabetesJournal extends Component {
  render() {
    return (
      <View >
        <Header Headertxt={'יומן סוכר'}/>
      </View>
    );
  }
}



AppRegistry.registerComponent('DiabetesJournal', () => DiabetesJournal);
