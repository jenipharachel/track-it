import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
// import {TextBox, SaveButton} from '../../components';
import colors from '../../theme/colors';

const AddEditModal = props => {
  const [amount, onChangeAmt] = React.useState('');
  const [desc, onChangeDesc] = React.useState('');
  const [date, onChangeDate] = React.useState('');

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
      {TextBox(onChangeDate, date, 'Date')}
      <TouchableOpacity style={{flex: 0.2, alignItems: 'center'}}>
        <Text style={{color: colors.accent}}>Save</Text>
      </TouchableOpacity>
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
    margin: 10,
    paddingLeft: 15,
  },
});

export default AddEditModal;
