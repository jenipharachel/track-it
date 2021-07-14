import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TransactionCard} from '../../theme';

const TrackHistory = props => {
  return (
    <View style={{flex: 0.7, backgroundColor: '#E5E5E5', padding: 10}}>
      <Text style={{fontSize: 12, textAlign: 'center'}}>Today</Text>
      <TransactionCard
        label={'Car tyre change'}
        value={'$567'}
        transType={'expense'}
      />
      <TransactionCard label={'Salary'} value={'$567'} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackHistory;
