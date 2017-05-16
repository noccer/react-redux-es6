// this file ensures the app is configured when it starts up.
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) { //configureStore() will be used at the entry point of our application
    return createStore( 
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant()) // check out react slingshot on github to learn how to configure other middleware
    );
}

