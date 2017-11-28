import React, { Component } from 'react';
import { View } from 'react-native';
import { CardSection } from './common';

class Bglistitem extends Component {
  render() {
    const { bgVal } = this.props.BG;
    const { carbsAm } = this.props.BG;
    const { desc } = this.props.BG;
    const { insUn } = this.props.BG;
    return (
      <View>
        <CardSection>
          <Text>
            BG value: {bgVal}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            Amount of carbs: {carbsAm}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            Description of the meal: {desc}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            Number of insulin Units: {insUn}
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