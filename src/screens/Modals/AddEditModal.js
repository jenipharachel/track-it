import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {TextBox, SwitchToggle} from '../../components';
import {TextBtn} from '../../components/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import {connect} from 'react-redux';
import {updateBalance, updateTransaction} from '../../redux/actions';
import moment from 'moment';
import {addBasedOnDate, updateBasedOnID} from './helpers';

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
    return (
      <TouchableOpacity
        style={{flex: 0.08, margin: 15}}
        onPress={showDatepicker}
        disabled={`${recordID}` ? true : false}>
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
    let isEditTransaction = `${recordID}`;
    let record = isEditTransaction && props.route.params.record;

    let updatedTransaction = isEditTransaction
      ? updateBasedOnID(currentTransaction, date, transactionHistory, recordID)
      : addBasedOnDate(currentTransaction, date, transactionHistory);

    if (transactionType == 'Expense') {
      if (props.balance >= amount) {
        if (record) {
          status.balance = balance + record.amount - parseInt(amount);
          status.expense = balance - record.amount + parseInt(amount);
        } else {
          status.balance -= parseInt(amount);
          status.expense += parseInt(amount);
        }
        updateDataToState(status, updatedTransaction);
      } else {
        alert('Purchase cannot be made since Bank balance is 0');
      }
    } else {
      if (record) {
        status.balance = balance - record.amount + parseInt(amount);
        status.income = balance - record.amount + parseInt(amount);
      } else {
        status.balance += parseInt(amount);
        status.income += parseInt(amount);
      }
      updateDataToState(status, updatedTransaction);
    }
  };

  const updateDataToState = (status, updatedTransactions) => {
    props.updateBalance(status);
    props.updateTransaction(updatedTransactions);
    props.navigation.pop();
  };

  return (
    <View style={styles.modalStyle}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{flex: 0.95, textAlign: 'center', fontSize: 18}}>
          Add Income/Expense
        </Text>
        <TouchableOpacity
          style={{flex: 0.05}}
          onPress={() => props.navigation.pop()}>
          <Icon name="close" size={20} color={colors.black} />
        </TouchableOpacity>
      </View>
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
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopEndRadius: 30,
    padding: 20,
  },
  input: {
    flex: 0.04,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E5E5E5',
    margin: 15,
    paddingLeft: 15,
    color: colors.lightblack,
  },
});

function mapStateToProps(state) {
  const {balance, income, expense} = state.status;
  const {transactionHistory} = state.transactions;
  return {balance, income, expense, transactionHistory};
}

const mapDispatchToProps = {updateBalance, updateTransaction};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditModal);
