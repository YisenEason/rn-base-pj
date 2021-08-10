/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store';
import RouterPage from './src/RouterPage';

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <RouterPage />
      </Provider>
    );
  }
}
