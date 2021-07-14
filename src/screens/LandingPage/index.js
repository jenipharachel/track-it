import React from 'react';
import {View} from 'react-native';
import {Header, BalanceCard} from '../../theme';

const LandingPage = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <BalanceCard />
    </View>
  );
};

export default LandingPage;
