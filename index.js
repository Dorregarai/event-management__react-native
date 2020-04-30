import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import createSagaMiddleware from 'redux-saga';
import rootReducer from './src/reducers';
import { createStore, applyMiddleware } from 'redux';
import mySaga from './src/saga/saga';
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(mySaga);

const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
