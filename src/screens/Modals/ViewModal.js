import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextBtn } from '@components/Button';
// import {TextBox} from '@components';
import colors from '@theme/colors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSelectedRecord, modifyStatusForDeletion } from './helpers';
import { updateBalance, updateTransaction, changeModalView } from '@redux/actions';
import { ModalHeader } from '@theme';
import PropTypes from 'prop-types';

const ViewModal = ({ navigation, route }) => {
  const { record, date, recordID } = route.params;
  let textColor = record.transactionType === 'Income' ? colors.income : colors.expense;
  const balance = useSelector((state) => state.status.balance);
  const income = useSelector((state) => state.status.income);
  const expense = useSelector((state) => state.status.expense);
  const transactionHistory = useSelector((state) => state.transactions.transactionHistory);
  const dispatch = useDispatch();

  const deleteRecord = (date, recordID) => {
    let status = { balance, income, expense };
    let modifiedStatus = modifyStatusForDeletion(status, record);
    if (modifiedStatus) {
      let modifiedList = deleteSelectedRecord(recordID, date, transactionHistory);
      dispatch(updateBalance(modifiedStatus));
      dispatch(updateTransaction(modifiedList));
    }
    navigation.pop();
  };

  const moveToEditScreen = () => {
    dispatch(changeModalView('Edit'));
  };

  return (
    <View style={styles.modalStyle}>
      <ModalHeader title={record.transactionType} closeModal={() => navigation.pop()} />
      <View style={styles.modalContent}>
        <View style={styles.amtArea}>
          <Text style={{ color: textColor, fontSize: 32 }}>${record.amount}</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.desc}>{record.desc}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.buttonArea}>
          <TextBtn label="Edit" onPress={() => moveToEditScreen()} />
          <TextBtn label="Delete" onPress={() => deleteRecord(date, recordID)} />
        </View>
      </View>
    </View>
  );
};

ViewModal.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      record: PropTypes.shape({
        amount: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        transactionType: PropTypes.string.isRequired,
      }).isRequired,
      date: PropTypes.string.isRequired,
      recordID: PropTypes.number.isRequired,
    }),
  }),
};

const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopEndRadius: 30,
    padding: 20,
  },
  modalContent: {
    flex: 0.93,
    alignItems: 'center',
    marginTop: 15,
    marginRight: 10,
  },
  desc: { color: colors.lightblack, fontSize: 18, margin: 5 },
  date: { color: colors.lightblack, fontSize: 14 },
  buttonArea: { flex: 0.2 },
  infoArea: { flex: 0.2, alignItems: 'center' },
  amtArea: { flex: 0.15 },
});

export default ViewModal;
