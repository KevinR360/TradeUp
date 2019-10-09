import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import './config/ReactotronConfig';
import {StatusBar} from 'react-native';

import {store, persistor} from './store';
import App from './App';

function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#e1e1e1" />
        <App />
      </PersistGate>
    </Provider>
  );
}

export default Index;
