import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import colors from '@theme/colors';

const TextBtn = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text
        style={{
          color: label === 'Delete' ? colors.lightblack : colors.accent,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { flex: 0.2, alignItems: 'center', margin: 10 },
});

TextBtn.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextBtn;
