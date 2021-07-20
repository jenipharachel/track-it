import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import {TextBox, SwitchToggle} from '../../components';
import {TextBtn} from '../../components/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import {colors, ModalHeader} from '../../theme';
import {connect} from 'react-redux';
import {updateBalance, updateTransaction} from '../../redux/actions';
import moment from 'moment';
import {addBasedOnDate, updateBasedOnID, validateStatus} from './helpers';

const AddEditModal = props => {
  const [amount, setAmount] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [recordID, setRecordID] = useState('');
  const [transactionType, setTransactionType] = useState('Income');
  const dateTime = new Date();

  useEffect(() => {
    if (props.route.params) {
      const {record, date, recordID} = props.route.params;
      setDate(date);
      setAmount(record.amount);
      setDesc(record.desc);
      setRecordID(recordID);
    }
  }, []);

  const TextBox = (func, value, placeholder) => {
    return (
      <TextInput
        style={styles.input}
        onChangeText={func}
        value={value}
        placeholder={placeholder}
      />
    );
  };

  const DateBox = (value, placeholder) => {
    let isDisabled = props.modalType == 'Edit' ? true : false;
    return (
      <TouchableOpacity
        style={{flex: 0.08, margin: 15}}
        onPress={showDatepicker}
        disabled={isDisabled}>
        <TextInput
          style={[styles.input, {flex: 1, margin: 0}]}
          value={`${value}`}
          placeholder={placeholder}
          editable={false}
        />
      </TouchableOpacity>
    );
  };

  const onChange = (event, selectedDateTime) => {
    let selectedDate =
      selectedDateTime && moment(new Date(selectedDateTime)).format('LL');
    let formattedDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(formattedDate);
  };

  const showMode = currentMode => {
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
    const {balance, income, expense, transactionHistory} = props;
    let status = {balance, income, expense};
    let currentTransaction = {amount, desc, transactionType};
    let isEditTransaction = props.modalType == 'Edit';
    let record = isEditTransaction && props.route.params.record;

    let updatedTransaction = isEditTransaction
      ? updateBasedOnID(currentTransaction, date, transactionHistory, recordID)
      : addBasedOnDate(currentTransaction, date, transactionHistory);

    let updatedStatus = validateStatus(
      balance,
      amount,
      record,
      status,
      transactionType,
    );
    if (updatedStatus) updateDataToState(updatedStatus, updatedTransaction);
  };

  const updateDataToState = (status, updatedTransactions) => {
    props.updateBalance(status);
    props.updateTransaction(updatedTransactions);
    props.navigation.pop();
  };

  return (
    <View style={styles.modalStyle}>
      <ModalHeader
        title={`${props.modalType} Income/Expense`}
        closeModal={() => props.navigation.pop()}
      />
      <View style={{flex: 0.93}}>
        <SwitchToggle
          transType={transactionType}
          setTransType={setTransactionType}
        />
        {TextBox(setAmount, amount, 'Amount')}
        {TextBox(setDesc, desc, 'Description')}
        {DateBox(date, 'Date')}
        <TextBtn label={'Save'} onPress={saveData} />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={dateTime}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
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
});

function mapStateToProps(state) {
  const {balance, income, expense} = state.status;
  const {transactionHistory} = state.transactions;
  const {modalType} = state.modal;
  return {balance, income, expense, transactionHistory, modalType};
}

const mapDispatchToProps = {updateBalance, updateTransaction};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditModal);
