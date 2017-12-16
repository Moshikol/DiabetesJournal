import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
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
//const { width, height } = Dimensions.get("window");
const height = 200;
const width = 500;

//import AreaSpline from "./art/";
import Pie from "./common/Pie";
import AreaSpline from './common/AreaSpline';
import Theme from "./theme";

const background = require("../Resources/img/login1_bg.png");

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      spendingsPerYear: this.data.spendingsPerYear
    };
    this._onPieItemSelected = this._onPieItemSelected.bind(this);
    this._shuffle = this._shuffle.bind(this);
  }

  data = {
    spendingsPerYear: [
      { year: 2016, value: 3.24 },
      { year: 2015, value: 3.24 },
      { year: 2014, value: 10.35 },
      { year: 2013, value: 10.84 },
      { year: 2012, value: 9.92 },
      { year: 2011, value: 65.8 },
      { year: 2010, value: 19.47 },
      { year: 2009, value: 30.24 },
      { year: 2008, value: 10.35 },
      { year: 2007, value: 10.84 },
      { year: 2006, value: 19.92 },
      { year: 2005, value: 80.8 },
      { year: 2004, value: 19.47 },
      { year: 2003, value: 34.24 },
      { year: 2001, value: 65.35 },
      { year: 2000, value: 45.84 },
      { year: 1999, value: 60.92 },
      { year: 1998, value: 21.8 },
      { year: 1997, value: 19.47 },
      { year: 1996, value: 3.24 },
      { year: 1995, value: 10.35 },
      { year: 1994, value: 20.84 },
      { year: 1993, value: 60.92 },
      { year: 1992, value: 80.8 }
    ],

    spendingsLastMonth: [
      { number: 28, name: "High From Range" },
      { number: 52, name: "In Range" },
      { number: 20, name: "Low From Range" }
    ]
  };

  _onPieItemSelected(newIndex) {
    this.setState({
      ...this.state,
      activeIndex: newIndex,
      spendingsPerYear: this._shuffle(this.data.spendingsPerYear)
    });
  }

  _shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.chart_title}>
            Monthly Average Of Blood Sugar Levels
          </Text>
          <Pie
            pieWidth={150}
            pieHeight={150}
            onItemSelected={this._onPieItemSelected}
            colors={Theme.colors}
            width={width}
            height={height}
            data={this.data.spendingsLastMonth}
          />
          <Text style={styles.chart_title}>
            Spending per year in{" "}
            {this.data.spendingsLastMonth[this.state.activeIndex].name}
          </Text>
          <AreaSpline
            width={width}
            height={height}
            data={this.data.spendingsPerYear}
            color={Theme.colors[this.state.activeIndex]}
          />
        </View>
      </ScrollView>
    );
  }
}
export default DashBoard;

const styles = {
  container: {
    backgroundColor: "whitesmoke",
    marginTop: 21
  },
  chart_title: {
    paddingTop: 15,
    textAlign: "center",
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 18,
    backgroundColor: "white",
    color: "grey",
    fontWeight: "bold"
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
    height: 20,
    width: 20
  },
  input: {
    flex: 1,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: "#FF3366",
    paddingVertical: 20,
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
  },
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    elevation: 1
  },
  listview: {
    borderRadius: 5,
    marginBottom: 50,
    height: 630
  },
  textStyle: {
    fontSize: 40
  },

  buttonStyle: {
    alignItems: "left"
  }
};
