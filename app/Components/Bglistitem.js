import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { CardSection, Card } from './common';

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
      <View style={{ borderRadius:10}}>
        <Card style={{ borderRadius:10}}>
          <CardSection style={{ borderTopLeftRadius:30,borderTopRightRadius:30}}>
            <Text>
              BG value: {this.state.bgVal}
            </Text>
          </CardSection>
          <CardSection>
            <Text>
              Amount of carbs: {this.state.carbsAm}
            </Text>
          </CardSection>
          <CardSection>
            <Text>
              Description of the meal: {this.state.desc}
            </Text>
          </CardSection>
          <CardSection>
            <Text>
              Number of insulin Units: {this.state.insUn}
            </Text>
          </CardSection>
          <CardSection style={{borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
            <Image source={{ uri: this.state.imgsrc }}
              style={{ width: 150, height: 150, margin: 1, borderRadius: 10 }} />
          </CardSection>
        </Card>
      </View>
    );
  }
};





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