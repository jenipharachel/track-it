import React from 'react';
import {View} from 'react-native';
import AddEditModal from './AddEditModal';
import ViewModal from './ViewModal';
import {connect} from 'react-redux';

const Modals = props => {
  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <View style={{flex: 0.95}}>
        {props.modalType == 'View' ? (
          <ViewModal {...props} />
        ) : (
          <AddEditModal {...props} />
        )}
      </View>
    </View>
  );
};

function mapStateToProps(state) {
  return {modalType: state.modal.modalType};
}

export default connect(mapStateToProps)(Modals);
