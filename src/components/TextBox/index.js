import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const TextBox = props => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={props.func}
      value={props.value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default TextBox;
