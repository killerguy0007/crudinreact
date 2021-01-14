import {combineReducers} from 'redux';
import authReducer from './authReducer';
//import titleReducer from './titleReducer';
import {reducer } from 'redux-form';
import streamReducer from './streamReducer.js';
//it is necessary to use the key name form when using redux form;
export default combineReducers({
	auth: authReducer,
	form: reducer,
	streams: streamReducer
	//titleReducer: titleReducer
});