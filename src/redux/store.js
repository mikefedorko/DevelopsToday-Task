import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middlewares = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middlewares);
const store = createStore(rootReducer, enhancer);

export default store;
