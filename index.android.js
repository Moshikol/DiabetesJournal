//#region Imports
import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, TextInput, View, BackHandler } from "react-native";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import Toast from "react-native-simple-toast";
import NewBG from "./app/Components/NewBG";
import LoginForm from "./app/Components/LoginForm";
import Bglst from "./app/Components/BgLst";
import Router from "./app/Router";
//#endregion

export default class DiabetesJournal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			Exitcount: 0,
		};
	}

	componentWillMount() {
    try {
      //Just for android
      Neura.init()

      const isAuth = await Neura.isAuthenticated()

      if (!isAuth) {
        const token = await Neura.authenticate()
      }
    } catch (error) {
      console.log(error)
    }
		if (!firebase.apps.length) {
			firebase.initializeApp({
				apiKey: "AIzaSyBgwVLxWeradAHjqw-5rMvLZ2_2NoZ0nKA",
				authDomain: "diabetesjournal-405cf.firebaseapp.com",
				databaseURL: "https://diabetesjournal-405cf.firebaseio.com",
				projectId: "diabetesjournal-405cf",
				storageBucket: "diabetesjournal-405cf.appspot.com",
				messagingSenderId: "750281915622",
			});
		}
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ isLoggedIn: true });
				Actions.BG();
			} else {
				this.setState({ isLoggedIn: false });
				Actions.auth();
			}
		});
		BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
	}

	componentDidMount() {
		BackHandler.addEventListener("hardwareBackPress", this.onBackPress.bind(this));
	}
	onBackPress() {
		if (Actions.state.index === 0) {
			return false;
		}
		if (Actions.currentScene === "_bglst") {
			this.setState({ Exitcount: this.state.Exitcount + 1 });

			if (this.state.Exitcount <= 1) {
				Toast.show("Press One More Time To Exit", Toast.SHORT);
			}

			if (this.state.Exitcount > 1) {
				this.state.Exitcount = 0;
				return false;
			}
		} else {
			Actions.pop();
			return true;
		}
		return true;
	}

	CompnentSelector(self) {
		if (self.state.isLoggedIn) {
			return (
				<View>
					<Header Headertxt={"BG Journal"} />
					<Bglst />
				</View>
			);
		} else {
			return (
				<View>
					<LoginForm />
				</View>
			);
		}
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Router />
			</View>
		);
	}
}

AppRegistry.registerComponent("DiabetesJournal", () => DiabetesJournal);
