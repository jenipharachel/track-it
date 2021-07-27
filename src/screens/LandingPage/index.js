import React from 'react';
import { View } from 'react-native';
import { TrackHistory } from '@components';
import { Header, BalanceCard } from '@theme';
import colors from '@theme/colors';

const LandingPage = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <BalanceCard />
      <TrackHistory {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
});

export default LandingPage;
