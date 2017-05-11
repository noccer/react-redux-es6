import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router'; //browserHistory uses HTML pushState() which is not compatible with really old browsers
import route from './routes';
import './styles/styles.css'; // Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render (
    <Router history={browserHistory} routes={routes} />, document.getElementById('app')
);
