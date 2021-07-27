import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AddBtn } from '../Button';
import { TransactionCard } from '@theme';
import { useSelector, useDispatch } from 'react-redux';
import { changeModalView } from '@redux/actions';
import colors from '@theme/colors';
import moment from 'moment';
import PropTypes from 'prop-types';

const TrackHistory = ({ navigation }) => {
  const currentDate = moment(new Date()).format('LL');
  const transactionHistory = useSelector((state) => state.transactions.transactionHistory);
  const dispatch = useDispatch();
  const ViewData = (record, date, recordID) => {
    dispatch(changeModalView('View'));
    navigation.navigate('Modals', {
      record,
      date,
      recordID,
    });
  };

  const AddData = () => {
    dispatch(changeModalView('Add'));
    navigation.navigate('Modals');
  };

  const displayTransactions = (transactionHistory) => {
    return (
      <FlatList
        data={transactionHistory}
        renderItem={({ item, index }) => {
          return (
            <View key={index} style={styles.itemArea}>
              <Text style={styles.title}>{currentDate === item.date ? 'Today' : item.date}</Text>
              {item.trans.map((record, id) => (
                <TransactionCard
                  key={id}
                  index={id}
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
        ListEmptyComponent={() => <View></View>}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.transactionContainer}>{displayTransactions(transactionHistory)}</View>
      <View style={styles.buttonContainer}>
        <AddBtn onButtonClick={AddData} />
      </View>
    </View>
  );
};

TrackHistory.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: { flex: 0.7, backgroundColor: colors.lightGrey, padding: 10 },
  title: { fontSize: 12, textAlign: 'center' },
  buttonContainer: { flex: 0.2, justifyContent: 'center', alignItems: 'center' },
  transactionContainer: { flex: 0.8 },
  itemArea: { flex: 0.1 },
});

export default TrackHistory;
