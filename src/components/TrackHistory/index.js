import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from '..';
import {TransactionCard} from '../../theme';

const TrackHistory = props => {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.8}}>
        <Text style={styles.title}>Today</Text>
        <TransactionCard
          label={'Car tyre change'}
          value={'$567'}
          transType={'expense'}
        />
        <TransactionCard label={'Salary'} value={'$567'} />
      </View>
      <View style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
        <Button />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 0.7, backgroundColor: '#E5E5E5', padding: 10},
  title: {fontSize: 12, textAlign: 'center'},
});

export default TrackHistory;
