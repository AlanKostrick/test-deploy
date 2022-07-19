import { applyMiddleware, combineReducers, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk';

const getMiddleware = () => {
    let middlewares = [
        thunkMiddleware
    ];

    middlewares.push(require('redux-logger').createLogger());

    return applyMiddleware(...middlewares);
};

const configureStore = preloadedState => {
    const rootReducer = combineReducers(reducers),
        middlewares = getMiddleware(),
        composeEnhancers = composeWithDevTools({
            trace: true,
            traceLimit: 25
        }),
        enhancers = composeEnhancers(middlewares),
        store = createStore(rootReducer, preloadedState, enhancers);

    return store;
};

export default configureStore;
