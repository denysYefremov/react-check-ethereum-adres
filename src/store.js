import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

const initialState = {};
const enhancers = [];
const middleware = [
    thunk
];

const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);

export default store
