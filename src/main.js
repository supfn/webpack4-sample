import React from 'react';
import {render} from 'react-dom';
import {HashRouter} from 'react-router-dom';
import './main.css';
import App from './App';

render(<HashRouter><App/></HashRouter>, document.getElementById('root'));


