import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {AddBtn} from '../Button';
import {TransactionCard} from '../../theme';
import {connect} from 'react-redux';
import {changeModalView} from '../../redux/actions';
import _ from 'lodash';
import colors from '../../theme/colors';

const TrackHistory = props => {
  const ViewData = (record, date, recordID) => {
    props.changeModalView('View');
    props.navigation.navigate('Modals', {
      record,
      date,
      recordID,
    });
  };

  const AddData = () => {
    props.changeModalView('Add');
    props.navigation.navigate('Modals');
  };

  const displayTransactions = transactionHistory => {
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
                    ViewData={() => ViewData(record, item.date, id)}
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
        <AddBtn onButtonClick={AddData} {...props} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 0.7, backgroundColor: colors.lightGrey, padding: 10},
  title: {fontSize: 12, textAlign: 'center'},
});

function mapStateToProps(state) {
  return {transactionHistory: state.transactions.transactionHistory};
}

const mapDispatchToProps = {changeModalView};

export default connect(mapStateToProps, mapDispatchToProps)(TrackHistory);
