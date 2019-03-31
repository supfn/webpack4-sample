import React from 'react';
import {render} from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import reducers from './reducers'
import './index.css';
import App from './App';

let store = createStore(reducers);


render(<HashRouter><Provider store={store}><App/></Provider></HashRouter>, document.getElementById('root'));


