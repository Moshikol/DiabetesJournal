import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
//import { CardAction, Card } from './common';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

class Bglistitem extends Component {

  constructor(props) {
    super(props);
    //   console.log('props');
    //  console.log(this.props);
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

      <Card style={{ borderRadius: 5 }}>
        <CardImage source={{ uri: this.props.BG.imgsrc }} />
        <CardContent style={{ borderBottomWidth: 0.5, borderColor: 'grey' }} text={`BG value: ${this.state.bgVal}`} />
        <CardContent style={{ borderBottomWidth: 0.5, borderColor: 'grey' }} text={`Amount of carbs: ${this.state.carbsAm}`} />
        <CardContent style={{ borderBottomWidth: 0.5, borderColor: 'grey' }} text={`Number of insulin Units: ${this.state.insUn}`} />
        <CardContent style={{ borderBottomWidth: 0.5, borderColor: 'grey' }} text={`Description of the meal: ${this.state.desc}`} />
      </Card >
    );
  }
}





const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Bglistitem;