import React from 'react';
import {View} from 'react-native';
import AddEditModal from './AddEditModal';
import ViewModal from './ViewModal';

const Modals = props => {
  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <View style={{flex: 0.95}}>
        <ViewModal {...props} />
      </View>
    </View>
  );
};

export default Modals;
