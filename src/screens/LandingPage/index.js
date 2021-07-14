import React from 'react';
import {View} from 'react-native';
import TrackHistory from '../../components/TrackHistory';
import {Header, BalanceCard} from '../../theme';

const LandingPage = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <BalanceCard />
      <TrackHistory />
    </View>
  );
};

export default LandingPage;
