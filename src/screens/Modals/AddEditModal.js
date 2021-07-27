import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, Platform } from 'react-native';
import { SwitchToggle } from '@components';
import { TextBtn } from '@components/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import { colors, ModalHeader } from '@theme';
import { useSelector, useDispatch } from 'react-redux';
import { updateBalance, updateTransaction } from '@redux/actions';
import moment from 'moment';
import { addBasedOnDate, updateBasedOnID, validateStatus } from './helpers';
import PropTypes from 'prop-types';

const AddEditModal = ({ navigation, route }) => {
  const [amount, setAmount] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [recordID, setRecordID] = useState('');
  const [transactionType, setTransactionType] = useState('Income');
  const dateTime = new Date();
  const balance = useSelector((state) => state.status.balance);
  const income = useSelector((state) => state.status.income);
  const expense = useSelector((state) => state.status.expense);
  const transactionHistory = useSelector((state) => state.transactions.transactionHistory);
  const modalType = useSelector((state) => state.modal.modalType);
  const dispatch = useDispatch();

  useEffect(() => {
    if (route.params) {
      const { record, date, recordID } = route.params;
      setDate(date);
      setAmount(record.amount);
      setDesc(record.desc);
      setRecordID(recordID);
    }
  }, []);

  const TextBox = (func, value, placeholder) => {
    return <TextInput style={styles.input} onChangeText={func} value={value} placeholder={placeholder} />;
  };

  const DateBox = (value, placeholder) => {
    let isDisabled = modalType === 'Edit' ? true : false;
    return (
      <TouchableOpacity style={styles.dateBox} onPress={showDatepicker} disabled={isDisabled}>
        <TextInput style={[styles.input, styles.fullArea]} value={`${value}`} placeholder={placeholder} editable={false} />
      </TouchableOpacity>
    );
  };

  const onChange = (event, selectedDateTime) => {
    let selectedDate = selectedDateTime && moment(new Date(selectedDateTime)).format('LL');
    let formattedDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(formattedDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const saveData = () => {
    if (!amount) alert('Enter the income/expense amount');
    else if (!desc) alert('Enter the reason for income/expense');
    else if (!date) alert('Select the date of income/expense');
    else {
      validateWithBankBalance();
    }
  };

  const validateWithBankBalance = () => {
    let status = { balance, income, expense };
    let currentTransaction = { amount, desc, transactionType };
    let isEditTransaction = modalType === 'Edit';
    let record = isEditTransaction && route.params.record;

    let updatedStatus = validateStatus(balance, amount, record, status, transactionType);
    if (updatedStatus) {
      let updatedTransaction = isEditTransaction
        ? updateBasedOnID(currentTransaction, date, transactionHistory, recordID)
        : addBasedOnDate(currentTransaction, date, transactionHistory);
      updateDataToState(updatedStatus, updatedTransaction);
    }
  };

  const updateDataToState = (status, updatedTransactions) => {
    dispatch(updateBalance(status));
    dispatch(updateTransaction(updatedTransactions));
    navigation.pop();
  };

  return (
    <View style={styles.modalStyle}>
      <ModalHeader title={`${modalType} Income/Expense`} closeModal={() => navigation.pop()} />
      <View style={styles.modalContainer}>
        <SwitchToggle transType={transactionType} setTransType={setTransactionType} />
        {TextBox(setAmount, amount, 'Amount')}
        {TextBox(setDesc, desc, 'Description')}
        {DateBox(date, 'Date')}
        <TextBtn label="Save" onPress={saveData} />
        {show && <DateTimePicker testID="dateTimePicker" value={dateTime} mode={mode} is24Hour={true} display="default" onChange={onChange} />}
      </View>
    </View>
  );
};

AddEditModal.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      record: PropTypes.shape({
        amount: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
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
  input: {
    flex: 0.04,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.grey,
    margin: 15,
    paddingLeft: 15,
    color: colors.lightblack,
  },
  modalContainer: { flex: 0.93 },
  dateBox: { flex: 0.08, margin: 15 },
  fullArea: { flex: 1, margin: 0 },
});

export default AddEditModal;
