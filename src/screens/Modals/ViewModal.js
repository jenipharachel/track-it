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

const ViewModal = props => {
  const {record, date} = props.route.params;
  let textColor =
    record.transactionType == 'Income' ? colors.income : colors.expense;
  return (
    <View style={styles.modalStyle}>
      <View style={{flex: 0.2, flexDirection: 'row'}}>
        <Text style={{flex: 0.95, textAlign: 'center', fontSize: 18}}>
          {record.transactionType}
        </Text>
        <TouchableOpacity
          style={{flex: 0.05}}
          onPress={() => props.navigation.pop()}>
          <Icon name="close" size={20} color={colors.black} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.8, alignItems: 'center'}}>
        <View style={{flex: 0.15}}>
          <Text style={{color: textColor, fontSize: 32}}>${record.amount}</Text>
        </View>
        <View style={{flex: 0.2, alignItems: 'center'}}>
          <Text style={{color: colors.lightblack, fontSize: 18}}>
            {record.desc}
          </Text>
          <Text style={{color: colors.lightblack, fontSize: 14}}>{date}</Text>
        </View>
        <View style={{flex: 0.2}}>
          <TouchableOpacity style={{flex: 0.2, alignItems: 'center'}}>
            <Text style={{color: colors.accent}}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 0.2, alignItems: 'center'}}>
            <Text style={{color: colors.lightblack}}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
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
});

export default ViewModal;
