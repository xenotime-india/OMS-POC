import React from 'react';
import { SQLite } from 'expo';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Main from './src';
import { createStore } from './src/store';

const store = createStore();

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
