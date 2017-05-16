import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router'; //browserHistory uses HTML pushState() which is not compatible with really old browsers
import routes from './routes';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';
import './styles/styles.css'; // Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore(); // create an instance of our store. you can hydrate this function with existing state from localstorage or server in configureStore(existingState)

store.dispatch(loadCourses()); // this is the point that calls the action to load the courses
store.dispatch(loadAuthors()); // this is the point that calls the action to load the courses

render (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
