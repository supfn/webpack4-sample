import React from 'react';
import {render} from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import reducers from './reducers';
import Routers from './layouts/Routers';

// import {composeWithDevTools} from 'redux-devtools-extension';
// let store = createStore(reducers, composeWithDevTools());

let store = createStore(reducers);

const App = () => <HashRouter><Provider store={store}><Routers/></Provider></HashRouter>;
render(<App/>, document.getElementById('root'));


