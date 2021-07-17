import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {TextBtn} from '../../components/Button';
// import {TextBox} from '../../components';
import colors from '../../theme/colors';
import {connect} from 'react-redux';
import {deleteSelectedRecord, modifyStatus} from './helpers';
import {updateBalance, updateTransaction} from '../../redux/actions';

const ViewModal = props => {
  const {record, date, recordID} = props.route.params;
  let textColor =
    record.transactionType == 'Income' ? colors.income : colors.expense;

  const deleteRecord = (date, recordID) => {
    const {transactionHistory, status} = props;
    let modifiedList = deleteSelectedRecord(recordID, date, transactionHistory);
    let modifiedStatus = modifyStatus(status, record);
    if (modifiedStatus) {
      props.updateBalance(modifiedStatus);
      props.updateTransaction(modifiedList);
    }
    props.navigation.pop();
  };

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
          <Text style={{color: colors.lightblack, fontSize: 18, margin: 5}}>
            {record.desc}
          </Text>
          <Text style={{color: colors.lightblack, fontSize: 14}}>{date}</Text>
        </View>
        <View style={{flex: 0.2}}>
          <TextBtn label={'Edit'} onPress={() => {}} />
          <TextBtn
            label={'Delete'}
            onPress={() => deleteRecord(date, recordID)}
          />
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

function mapStateToProps(state) {
  const {status} = state;
  const {transactionHistory} = state.transactions;
  return {status, transactionHistory};
}

const mapDispatchToProps = {updateBalance, updateTransaction};

export default connect(mapStateToProps, mapDispatchToProps)(ViewModal);
