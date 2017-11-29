import React, { Component } from 'react';
import { View } from 'react-native';
import { CardSection } from './common';

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
      <View>
        <CardSection>
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

export { Bglistitem };