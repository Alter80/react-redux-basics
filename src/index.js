import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import allReducers from './reducers/reducers';


// import { createStore } from 'redux';

// // Basics
// // STORE-> Globalized State

// //Action -> Increment/Decrement function for the reducer
// // its a simple function that returns an object. 
// const increment = () => {
//   return {
//     type: 'INCREMENT' //action Name
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT' //action Name
//   }
// }

// // Reducer -> Transformation of action. It checks the action and sets data in the Store. 
// const counter = (state = 0, action) => {

//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;

//     case "DECREMENT":
//       return state - 1;

//   }

// }

// let store = createStore(counter);

// // print in the console
// store.subscribe(() => console.log(store.getState()));

// // Dispatch -> Execution of Action or the action function
// store.dispatch(increment());
// store.dispatch(decrement());

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
