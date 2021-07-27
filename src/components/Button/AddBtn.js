import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-remix-icon';
import colors from '@theme/colors';

const AddBtn = ({ onButtonClick }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onButtonClick()}>
      <Icon name="add-fill" size={20} color={colors.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    width: 56,
    backgroundColor: colors.accent,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AddBtn.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default AddBtn;
