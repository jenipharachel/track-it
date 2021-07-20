import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../colors';

const TransactionCard = props => {
  return (
    <TouchableOpacity
      key={props.index}
      style={styles.card}
      onPress={() => props.ViewData()}>
      <View style={styles.alignment}>
        <Text style={{fontSize: 14}}>{props.label}</Text>
        <Text
          style={{
            fontSize: 14,
            color: props.transType == 'Income' ? colors.income : colors.expense,
          }}>
          ${props.value}
        </Text>
      </View>
    </TouchableOpacity>
  );
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
});
export default TransactionCard;
