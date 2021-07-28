import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-remix-icon';
import colors from '../../theme/colors';
import PropTypes from 'prop-types';

const ModalHeader = ({ title, closeModal }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.closeBtn} onPress={closeModal}>
        <Icon name="close-fill" size={20} color={colors.black} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 0.07, flexDirection: 'row' },
  title: { flex: 0.95, textAlign: 'center', fontSize: 18 },
  closeBtn: { flex: 0.05 },
});

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ModalHeader;
