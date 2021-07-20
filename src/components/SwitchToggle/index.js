import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../theme/colors';

const SwitchToggle = ({transType, setTransType}) => {
  const toggleBox = value => {
    let backgroundColor = transType == value ? colors.accent : colors.lightGrey;
    let fontColor = transType == value ? colors.white : colors.lightblack;
    return (
      <TouchableOpacity
        style={{
          flex: 0.2,
          backgroundColor: backgroundColor,
          padding: 10,
        }}
        onPress={() => setTransType(value)}>
        <Text style={{textAlign: 'center', color: fontColor}}>{value}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
      }}>
      {toggleBox('Income')}
      {toggleBox('Expense')}
    </View>
  );
};

export default SwitchToggle;
