import React from 'react';
import {TouchableOpacity} from 'react-native';
import colors from '../../theme/colors';

const saveButton = props => {
  return (
    <TouchableOpacity style={{flex: 0.2, alignItems: 'center'}}>
      <Text style={{color: colors.accent}}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default saveButton;
