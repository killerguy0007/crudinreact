//sample code for array based implementation


// const streamReducer = (state=[],action) => {
// 	switch(action.type)
// 	{
// 		case('EDIT_STREAM'):
// 			return state.map(stream => {
// 				if(stream.id === action.payload.id)
// 				{
// 					return action.payload;
// 				}
// 				else
// 				{
// 					return stream;
// 				}
// 			});
		// default:
		// 	return state;
// 	}
// }


// object based implementation

// const streamReducer = (state= {},action) => {
// 	switch(action.type)
// 	{
// 		case 'EDIT_STREAM':
// 			// const newState = {...state};
// 			// newState[action.payload.id] = action.payload;
// 			// return newState;
// 			return {...state, [action.payload.id]:action.payload};
// 		default:
// 			return state;
// 	}
// };


//here keep in mind although we have all the record stored in the api but the records
//are not present in the state of the user i.e the browser of the user so first say when
//a user hits the landing page to pull all the streams from the server to the landing
//we recieve an array of stream objects and then to render we need to save them into
//the state of react that is what we are doing here rest of the things are being handled
//by the calls in the actions.

//so we are making the data in the api server and react state match each other via reducer.

import {CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM } from '../actions/types.js';
import _ from 'lodash';

const streamReducer =  (state={} , action) => {
	switch (action.type)
	{
		case FETCH_STREAM:
			return {...state, [action.payload.id]: action.payload};
		case CREATE_STREAM:
			return {...state, [action.payload.id]: action.payload};
		case EDIT_STREAM:
			return {...state, [action.payload.id]: action.payload};
		case DELETE_STREAM:
			return _.omit(state,action.payload);
		case FETCH_STREAMS:
			//(value, key) key:value
			return {...state, ..._.mapKeys(action.payload,'id')};
			//basically add to the state streams with the key as property id.
		default:
			return state;
	}
};

export default streamReducer;
















