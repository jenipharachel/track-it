import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../colors';
import PropTypes from 'prop-types';

const TransactionCard = ({ index, label, ViewData, transType, value }) => {
  return (
    <TouchableOpacity key={index} style={styles.card} onPress={() => ViewData()}>
      <View style={styles.alignment}>
        <Text style={styles.fontSize}>{label}</Text>
        <Text
          style={[
            styles.fontSize,
            {
              color: transType === 'Income' ? colors.income : colors.expense,
            },
          ]}>
          ${value}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

TransactionCard.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  ViewData: PropTypes.func.isRequired,
  transType: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  card: {
    flex: 0.07,
    borderColor: colors.grey,
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    backgroundColor: colors.white,
  },
  alignment: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 14,
  },
});
export default TransactionCard;
