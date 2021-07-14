import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from '..';
import {TransactionCard} from '../../theme';

const TrackHistory = props => {
  const ViewData = () => {
    props.navigation.navigate('Modals');
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 0.8}}>
        <Text style={styles.title}>Today</Text>
        <TransactionCard
          label={'Car tyre change'}
          value={'$567'}
          transType={'expense'}
          ViewData={ViewData}
        />
        <TransactionCard label={'Salary'} value={'$567'} ViewData={ViewData} />
      </View>
      <View style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
        <Button {...props} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 0.7, backgroundColor: '#E5E5E5', padding: 10},
  title: {fontSize: 12, textAlign: 'center'},
});

export default TrackHistory;
