import React, { Component } from "react";
import { View, Text, Image } from "react-native";
//import { CardAction, Card } from './common';
import { Icon } from "react-native-elements";
import { Right } from "native-base";

class Bglistitem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bgVal: this.props.BG.bgVal,
			carbsAm: this.props.BG.carbsAm,
			insUn: this.props.BG.insUn,
			desc: this.props.BG.desc,
			imgsrc: this.props.BG.imgsrc,
			datetaken: this.props.BG.datetaken
		};
	}

	render() {
		return (
			<View
				style={{
					flexDirection: "column",
					backgroundColor: "#FFFFFF",
					borderBottomWidth: 0.5,
					borderColor: "grey",
					marginTop: 10
				}}>
				<Text style={styles.dateStyle}> {this.state.datetaken}</Text>

				<View
					name="GlobalView"
					style={{
						flexDirection: "row",
						backgroundColor: "#FFFFFF",
						borderBottomWidth: 0.5,
						borderColor: "grey",
						alignItems: "center"
					}}>
					<View style={{ flexDirection: "row", marginVertical: 10 }}>
						<View name="ColumnViewLeft" style={styles.ViewColumnStyle}>
							<View name="BgValueView" style={styles.ViewRowStyle}>
								<Icon name="opacity" color="red" size={20} style={{ marginRight: -5 }} />
								<Text style={styles.labelStyle}> {this.state.bgVal} ml/dl</Text>
							</View>

							<View name="CarbsAmntView" style={styles.ViewRowStyle}>
								<Icon name="local-dining" color="grey" size={20} />
								<Text style={styles.labelStyle}>{this.state.carbsAm} /gr</Text>
							</View>
						</View>

						<View name="ColumnViewRight" style={styles.ViewColumnStyle}>
							<View name="InsulinUView" style={styles.ViewRowStyle}>
								<Icon name="colorize" color="grey" size={20} />
								<Text style={styles.labelStyle}>{this.state.insUn}U</Text>
							</View>
							<View name="Decriptionview" style={styles.ViewRowStyle}>
								<Icon name="help" color="grey" size={20} />
								{/* <Text>{this.state.desc}</Text> */}
							</View>
						</View>
						<View name="ImageView">
							<Image
								style={{
									width: 45,
									height: 45,
									left: 50,
									borderRadius: 100,
									alignSelf: "flex-end"
								}}
								source={{ uri: this.state.imgsrc }}
							/>
						</View>
					</View>
				</View>
			</View>
		);
	}
}
export default Bglistitem;
const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: "#ddd",
		borderBottomWidth: 0,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	},

	labelStyle: {
		fontSize: 18,
		marginLeft: 2
	},
	dateStyle: {
		alignSelf: "center", 
		fontSize: 12,
		marginLeft: 2,
		marginTop: 10
	},
	ViewRowStyle: {
		alignItems: "center",
		flexDirection: "row"
	},
	ViewRowStyle: {
		flexDirection: "row"
	},
	ViewColumnStyle: {
		paddingLeft: 10,
		flexDirection: "column"
	}
};
