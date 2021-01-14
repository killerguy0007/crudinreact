import streams from '../apis/streams.js';
import history from '../history.js';

import {CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM } from './types.js';
export const signIn = (UserId) => {
	return {
		type: 'SIGN_IN',
		payload: UserId
	};
};

export const signOut = () => {
	return {
		type: 'SIGN_OUT'
	};
};

export const createStream = (formValues) => {
	return async (dispatch,getState) =>{
		const userId =getState().auth.userId;
		const response = await streams.post('/streams',{...formValues,userId}).catch((err)=>{console.log(err)});
		dispatch({type:CREATE_STREAM,payload:response.data});
		history.push('/');
	}; 
};

export const fetchStreams = () => {
	return async (dispatch) =>{
		const response = await streams.get('/streams').catch((err)=>{console.log(err)});
		dispatch({type:FETCH_STREAMS,payload:response.data});
	};
};

export const fetchStream = (id) => {
	return async (dispatch) => {
		const response = await streams.get(`/streams/${id}`).catch((err) => {console.log(err)});
		dispatch({type:FETCH_STREAM,payload:response.data});
	};
};

export const editStream = (id, formValues) => {
	return async (dispatch) => {
		// console.log('i am editing stream');
		//this returns an edited stream.
		const response = await streams.patch(`/streams/${id}`, formValues);
		//this dispatches for the edited stream.
		dispatch({type:EDIT_STREAM, payload:response.data});
		history.push('/');
	};
};

export const deleteStream =(id) =>{
	return async (dispatch) => {
		await streams.delete(`/streams/${id}`).catch((err)=>{console.log(err)});
		dispatch({type:DELETE_STREAM, payload: id});
		history.push('/');
	};
};



// export const setTitle = (term) => {
// 	return {
// 		type: 'SET_TITLE',
// 		payload: term
// 	};
// };