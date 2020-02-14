/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import {name as appName} from './app.json';
import store from './store/index';
import MainComponent from './components/Main'

const App = () => {
    return (
        <Provider store={store}>
            <MainComponent />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => App);
