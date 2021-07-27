import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddEditModal from './AddEditModal';
import ViewModal from './ViewModal';
import { useSelector } from 'react-redux';

const Modals = (props) => {
  const modalType = useSelector((state) => state.modal.modalType);
  return (
    <View style={styles.fullArea}>
      <View style={styles.modalArea}>{modalType === 'View' ? <ViewModal {...props} /> : <AddEditModal {...props} />}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullArea: { flex: 1, justifyContent: 'flex-end' },
  modalArea: { flex: 0.95 },
});

export default Modals;
