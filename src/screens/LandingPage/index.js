import React from 'react';
import {View} from 'react-native';
import {TrackHistory} from '../../components';
import {Header, BalanceCard} from '../../theme';

const LandingPage = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <BalanceCard />
      <TrackHistory {...props} />
    </View>
  );
};

export default LandingPage;
