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
			imgsrc: this.props.BG.imgsrc
		};
	}

	render() {
		return (
			<View
				name="GlobalView"
				style={{
					flexDirection: "row",
					backgroundColor: "#FFFFFF",
					borderBottomWidth: 0.5,
					borderColor: "grey"
				}}>
				<View
					name="ColumnViewLeft"
					style={{
						marginRight: 10,
						flexDirection: "column"
					}}>
					<View
						name="BgValueView"
						style={{
							margin: 5,
							flexDirection: "row"
						}}>
						<Icon name="opacity" color="red" size={20} />
						<Text style={{ fontSize: 14, marginTop: 7 }}> {this.state.bgVal} ml/dl</Text>
					</View>

					<View
						name="CarbsAmntView"
						style={{
							margin: 5,
							flexDirection: "row"
						}}>
						<Icon name="local-dining" color="grey" size={20} />
						<Text>{this.state.carbsAm} /gr</Text>
					</View>
				</View>

				<View name='ColumnViewRight' style={{ marginRight: 10, flexDirection: "column" }}>
					<View name='InsulinUView'
						style={{
							flexDirection: "row",
							marginRight: 10,
							marginTop: 10
						}}>
						<Icon name="colorize" color="grey" size={20} />
						<Text>{this.state.insUn}U</Text>
					</View>
					<View name='Decriptionview'
						style={{
							margin: 10,
							flexDirection: "row"
						}}>
						<Icon name="help" color="grey" size={20} />
						{/* <Text>{this.state.desc}</Text> */}
					</View>
				</View>

				<Image
					style={{
						width: 60,
						height: 60,
						position: "relative",
						marginVertical: 10,
						borderRadius: 100,
						alignSelf: "flex-end"
					}}
					source={{ uri: this.state.imgsrc }}
				/>
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
	}
};
