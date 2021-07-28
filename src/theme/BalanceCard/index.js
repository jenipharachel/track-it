/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import colors from '../colors';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  color: ${(props) => props.color};
  font-size: ${(props) => (props.balance ? 24 : 20)};
`;

const PlainText = styled.Text`
  color: ${colors.black}
  font-size: 12px;
`;

const BalanceCard = ({ balance, income, expense }) => {
  return (
    <View style={styles.balanceBox}>
      <View style={styles.section}>
        <PlainText>Balance</PlainText>
        <StyledText color={colors.balance} balance>
          ${balance}
        </StyledText>
      </View>
      <View style={styles.separator} />
      <View style={styles.halfFlex}>
        <View style={styles.section}>
          <PlainText>Income</PlainText>
          <StyledText color={colors.income}>${income}</StyledText>
        </View>
        <View style={styles.section}>
          <StyledText color={colors.expense}>${expense}</StyledText>
          <PlainText>Expense</PlainText>
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
});

function mapStateToProps(state) {
  const { balance, income, expense } = state.status;
  return { balance: balance, income: income, expense: expense };
}

export default connect(mapStateToProps)(BalanceCard);
