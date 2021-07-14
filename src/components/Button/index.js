import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Button = props => {
  return (
    <View style={styles.button}>
      <Icon name="plus" size={20} color="#FFFFFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    width: 56,
    backgroundColor: '#F9C201',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Button;
