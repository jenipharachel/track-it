import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-remix-icon';
import colors from '../../theme/colors';

const ModalHeader = props => {
  return (
    <View style={{flex: 0.07, flexDirection: 'row'}}>
      <Text style={{flex: 0.95, textAlign: 'center', fontSize: 18}}>
        {props.title}
      </Text>
      <TouchableOpacity style={{flex: 0.05}} onPress={props.closeModal}>
        <Icon name="close-fill" size={20} color={colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default ModalHeader;
