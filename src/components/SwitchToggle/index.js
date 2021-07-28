import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '@theme/colors';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  text-align: center;
  color: ${(props) => props.color};
`;

const Button = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${(props) => props.backgroundColor};
  border-top-left-radius: ${(props) => (props.selectedValue === 'Income' ? 5 : 0)};
  border-bottom-left-radius: ${(props) => (props.selectedValue === 'Income' ? 5 : 0)};
  border-top-right-radius: ${(props) => (props.selectedValue === 'Expense' ? 5 : 0)};
  border-bottom-right-radius: ${(props) => (props.selectedValue === 'Expense' ? 5 : 0)};
`;

const SwitchToggle = ({ transType, setTransType }) => {
  const toggleBox = (value) => {
    let backgroundColor = transType === value ? colors.accent : colors.lightGrey;
    let fontColor = transType === value ? colors.white : colors.lightblack;
    return (
      <Button backgroundColor={backgroundColor} selectedValue={value} onPress={() => setTransType(value)}>
        <StyledText color={fontColor}>{value}</StyledText>
      </Button>
    );
  };

  return (
    <View style={styles.container}>
      {toggleBox('Income')}
      {toggleBox('Expense')}
    </View>
  );
};

SwitchToggle.propTypes = {
  transType: PropTypes.string.isRequired,
  setTransType: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  toggle: { flex: 0.2 },
});

export default SwitchToggle;
