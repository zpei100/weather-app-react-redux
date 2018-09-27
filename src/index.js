import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

var store = createStore(rootReducer, ReduxThunk)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> ,document.getElementById('root'));
