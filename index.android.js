/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReduxers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { Navigator } from './app/containers/Navigate';
import AppContainer from './app/containers/Appcontainer';
import Splash from './app/containers/Splash';
import Route from './app/containers/routes';
import reducer from './app/reducers';
const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__});

function configureStore(initialState){
  const enhancer = compose(
      applyMiddleware(thunkMiddleware,loggerMiddleware)
    );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

import{
  AppRegistry,
} from 'react-native';

const App = () => (
  <Provider store={store}>
    <Navigator/>
  </Provider>

  );

AppRegistry.registerComponent('TodoList', () => App);
