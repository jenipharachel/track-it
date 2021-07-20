import React from 'react';
import {View} from 'react-native';
import {TrackHistory} from '../../components';
import {Header, BalanceCard} from '../../theme';
import colors from '../../theme/colors';

const LandingPage = props => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <Header />
      <BalanceCard />
      <TrackHistory {...props} />
    </View>
  );
};

export default LandingPage;
