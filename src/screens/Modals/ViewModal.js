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
import {deleteSelectedRecord, modifyStatusForDeletion} from './helpers';
import {
  updateBalance,
  updateTransaction,
  changeModalView,
} from '../../redux/actions';
import {ModalHeader} from '../../theme';

const ViewModal = props => {
  const {record, date, recordID} = props.route.params;
  let textColor =
    record.transactionType == 'Income' ? colors.income : colors.expense;

  const deleteRecord = (date, recordID) => {
    const {transactionHistory, status} = props;
    let modifiedList = deleteSelectedRecord(recordID, date, transactionHistory);
    let modifiedStatus = modifyStatusForDeletion(status, record);
    if (modifiedStatus) {
      props.updateBalance(modifiedStatus);
      props.updateTransaction(modifiedList);
    }
    props.navigation.pop();
  };

  const moveToEditScreen = () => {
    props.changeModalView('Edit');
  };

  return (
    <View style={styles.modalStyle}>
      <ModalHeader
        title={record.transactionType}
        closeModal={() => props.navigation.pop()}
      />
      <View style={styles.modalContent}>
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
          <TextBtn label={'Edit'} onPress={() => moveToEditScreen()} />
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
});

function mapStateToProps(state) {
  const {status} = state;
  const {transactionHistory} = state.transactions;
  return {status, transactionHistory};
}

const mapDispatchToProps = {updateBalance, updateTransaction, changeModalView};

export default connect(mapStateToProps, mapDispatchToProps)(ViewModal);
