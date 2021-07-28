import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';

const TextBox = ({ value, func }) => {
  return <TextInput style={styles.input} onChangeText={func} value={value} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

TextBox.propTypes = {
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default TextBox;
