import React from 'react';
import {render} from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import create from 'src/redux/create.js';
import Routers from './layouts/Routers';
import './index.css';
import text from "../txt/test.txt";

console.log("text:",text); // test loader
let store = create();

const App = () => <HashRouter><Provider store={store}><Routers/></Provider></HashRouter>;
render(<App/>, document.getElementById('root'));


