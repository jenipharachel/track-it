import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Button} from '..';
import {TransactionCard} from '../../theme';
import {connect} from 'react-redux';
import _ from 'lodash';

const TrackHistory = props => {
  const ViewData = () => {
    props.navigation.navigate('Modals');
  };

  displayTransactions = transactionHistory => {
    return (
      transactionHistory && (
        <FlatList
          data={transactionHistory}
          renderItem={({item, index}) => {
            return (
              <View key={index} style={{flex: 1}}>
                <Text style={styles.title}>{item.date}</Text>
                {item.trans.map((record, id) => (
                  <TransactionCard
                    key={id}
                    label={record.desc}
                    value={record.amount}
                    transType={record.transactionType}
                    ViewData={ViewData}
                  />
                ))}
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      )
    );
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 0.8}}>
        {props.transactionHistory &&
          displayTransactions(props.transactionHistory)}
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

function mapStateToProps(state) {
  return {transactionHistory: state.transactions.transactionHistory};
}

export default connect(mapStateToProps)(TrackHistory);
