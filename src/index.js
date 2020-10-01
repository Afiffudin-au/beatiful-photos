import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './assets/main.css'
import { StateProvider } from './stateProvider/StateProvider';
import reducer ,{initialState} from './reducer/Reducer'
ReactDOM.render(
  <StateProvider reducer={reducer} initialState={initialState} >
    <App />
  </StateProvider>,
  document.getElementById('root')
);
