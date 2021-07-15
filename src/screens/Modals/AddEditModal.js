import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
// import {TextBox, SaveButton} from '../../components';
import colors from '../../theme/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const AddEditModal = props => {
  const [amount, onChangeAmt] = React.useState('');
  const [desc, onChangeDesc] = React.useState('');
  let currentDate = moment(new Date()).format('LL');
  const [date, setDate] = useState(currentDate);
  const dateTime = new Date();
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

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
        onPress={showDatepicker}>
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
    let selectedDate = new Date(selectedDateTime);
    let formattedDate = moment(new Date(selectedDate)).format('LL') || date;
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
      {/* <TextBox func={onChangeText} value={text} /> */}
      {TextBox(onChangeAmt, amount, 'Amount')}
      {TextBox(onChangeDesc, desc, 'Description')}
      {DateBox(date, 'Date')}
      <TouchableOpacity
        style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: colors.accent}}>Save</Text>
      </TouchableOpacity>
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

export default AddEditModal;
