import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));