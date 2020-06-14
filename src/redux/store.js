import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import portfolioReducer from './portfolio-reducer';

const rootReducer = combineReducers({
    portfolio: portfolioReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export default store;
