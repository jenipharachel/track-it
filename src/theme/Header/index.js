import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../colors';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={{color: colors.white}}>TrackIt</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
});

export default Header;
