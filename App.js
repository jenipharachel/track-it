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
import {PersistGate} from 'redux-persist/lib/integration/react';
import AppNavigator from './src/navigation';
import colors from './src/theme/colors';
import Store, {Persistor} from './src/redux/store';

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.accent} />
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
