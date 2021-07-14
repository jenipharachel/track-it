import React from 'react';
import {View} from 'react-native';
import AddEditModal from './AddEditModal';

const Modals = props => {
  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <View style={{flex: 0.95}}>
        <AddEditModal {...props} />
      </View>
    </View>
  );
};

export default Modals;
