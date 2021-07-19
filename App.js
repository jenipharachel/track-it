/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigation';
import colors from './src/theme/colors';
import Store from './src/redux/store';

const App = () => {
  return (
    <Provider store={Store}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.accent} />
      <AppNavigator />
    </Provider>
  );
};

export default App;
