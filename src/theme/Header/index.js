import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={{color: 'white'}}>TrackIt</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    backgroundColor: '#F9C201',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
});

export default Header;
