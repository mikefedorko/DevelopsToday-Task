import { combineReducers } from 'redux';
import types from './action-types';

const postsReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case types.FETCH_REQUEST:
		case types.FETCH_POSTS_SUCCESS:
			return { ...state, ...payload };
		case types.FETCH_ERROR:
			return {};
		default:
			return state;
	}
};

const postByIdReducer = (state = null, { type, payload }) => {
	switch (type) {
		case types.FETCH_REQUEST:
		case types.FETCH_POST_BY_ID_SUCCESS:
			return { ...state, ...payload };
		case types.COMMENT_ADDED_SUCCESS:
			return {
				...state,
				comments: [ ...state.comments, payload ]
			};
		case types.FETCH_ERROR:
			return null;

		default:
			return state;
	}
};

const isLoadingReducer = (state = false, { type }) => {
	switch (type) {
		case types.FETCH_REQUEST:
			return true;
		case types.FETCH_POSTS_SUCCESS:
		case types.FETCH_POST_BY_ID_SUCCESS:
		case types.FETCH_ERROR:
			return false;
		default:
			return state;
	}
};

const errorReducer = (state = null, { type, payload }) => {
	switch (type) {
		case types.FETCH_REQUEST:
		case types.FETCH_POSTS_SUCCESS:
		case types.FETCH_POST_BY_ID_SUCCESS:
			return null;
		case types.FETCH_ERROR:
			return payload;
		default:
			return state;
	}
};

export default combineReducers({
	posts: postsReducer,
	postById: postByIdReducer,
	isLoading: isLoadingReducer,
	error: errorReducer
});
