import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';
import {enableScreens, enableFreeze} from 'react-native-screens';

import App from './app';

import StoreConfig from './configureStore';

enableFreeze(false);
enableScreens(true);

class Root extends PureComponent {
  render() {
    return (
      <Provider store={StoreConfig.store}>
        <App />
      </Provider>
    );
  }
}

export default () => <Root />;
