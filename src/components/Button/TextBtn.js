import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import colors from '../../theme/colors';

const TextBtn = props => {
  return (
    <TouchableOpacity
      style={{flex: 0.2, alignItems: 'center', margin: 10}}
      onPress={props.onPress}>
      <Text
        style={{
          color: props.label == 'Delete' ? colors.lightblack : colors.accent,
        }}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextBtn;
