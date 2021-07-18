import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const BalanceCard = props => {
  return (
    <View style={styles.balanceBox}>
      <View style={styles.section}>
        <Text style={{fontSize: 12}}>Balance</Text>
        <Text style={{color: '#02BEE8', fontSize: 24}}>${props.balance}</Text>
      </View>
      <View style={styles.separator} />
      <View style={{flex: 0.5}}>
        <View style={styles.section}>
          <Text style={{fontSize: 12}}>Income</Text>
          <Text style={{color: '#00B152', fontSize: 20}}>${props.income}</Text>
        </View>
        <View style={styles.section}>
          <Text style={{color: '#D10000', fontSize: 20}}>${props.expense}</Text>
          <Text style={{fontSize: 12}}>Expense</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceBox: {
    flex: 0.2,
    flexDirection: 'row',
    margin: 20,
    borderColor: '#D3D3D3',
    borderRadius: 5,
    borderWidth: 1,
  },
  section: {flex: 0.5, alignItems: 'center', justifyContent: 'center'},
  separator: {
    flex: 0.001,
    backgroundColor: '#D3D3D3',
    marginVertical: 10,
  },
});

function mapStateToProps(state) {
  const {balance, income, expense} = state.status;
  return {balance: balance, income: income, expense: expense};
}

export default connect(mapStateToProps)(BalanceCard);
