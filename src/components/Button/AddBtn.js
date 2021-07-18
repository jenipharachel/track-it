import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const AddBtn = props => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.onButtonClick()}>
      <Icon name="plus" size={20} color="#FFFFFF" />
    </TouchableOpacity>
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

export default AddBtn;
