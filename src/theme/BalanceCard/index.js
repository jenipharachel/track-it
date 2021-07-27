import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import colors from '../colors';
import PropTypes from 'prop-types';
// import styled from 'styled-components/native';

// const StyledView = styled.View`
//   background-color: papayawhip;
// `;

// const StyledText = styled.Text`
//   fontColor: ${(props) => props.color};
//   fontSize: ${(props) => (props.balance ? 24 : 20)};
// `;

const BalanceCard = ({ balance, income, expense }) => {
  return (
    <View style={styles.balanceBox}>
      <View style={styles.section}>
        <Text style={styles.subtext}>Balance</Text>
        {/* <StyledText color={colors.balance} balance>
          ${balance}
        </StyledText> */}
        <Text style={styles.balanceText}>${balance}</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.halfFlex}>
        <View style={styles.section}>
          <Text style={styles.subtext}>Income</Text>
          <Text style={styles.incomeText}>${income}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.expenseText}>${expense}</Text>
          <Text style={styles.subtext}>Expense</Text>
        </View>
      </View>
    </View>
  );
};

BalanceCard.propTypes = {
  balance: PropTypes.number.isRequired,
  income: PropTypes.number.isRequired,
  expense: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  balanceBox: {
    flex: 0.2,
    flexDirection: 'row',
    margin: 20,
    borderColor: colors.grey,
    borderRadius: 5,
    borderWidth: 1,
  },
  section: { flex: 0.5, alignItems: 'center', justifyContent: 'center' },
  halfFlex: { flex: 0.5 },
  separator: {
    flex: 0.001,
    backgroundColor: colors.grey,
    marginVertical: 10,
  },
  subtext: {
    fontSize: 12,
  },
  balanceText: { color: colors.balance, fontSize: 24 },
  incomeText: { color: colors.income, fontSize: 20 },
  expenseText: { color: colors.expense, fontSize: 20 },
});

function mapStateToProps(state) {
  const { balance, income, expense } = state.status;
  return { balance: balance, income: income, expense: expense };
}

export default connect(mapStateToProps)(BalanceCard);
