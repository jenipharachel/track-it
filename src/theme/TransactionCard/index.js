import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TransactionCard = props => {
  return (
    <View style={styles.card}>
      <View style={styles.alignment}>
        <Text style={{fontSize: 14}}>{props.label}</Text>
        <Text
          style={{
            fontSize: 14,
            color: props.transType ? '#D10000' : '#00B152',
          }}>
          {props.value}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 0.07,
    borderColor: '#D3D3D3',
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  alignment: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
export default TransactionCard;
