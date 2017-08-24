import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/createStore.js';

configureStore();

ReactDOM.render(<App />, document.getElementById('root'));
