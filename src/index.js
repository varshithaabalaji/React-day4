import React from 'react'
import ReactDOM from 'react-dom';
import {Provider}from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import rootReducer from './reducers';
import{createStore }from 'redux';
import  App from './App';

import reducer from './reducers';

// const store=createStore(rootReducer);
// console.log(store.getState());


ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <App/>
    </Provider>,
   document.getElementById('root') 
);