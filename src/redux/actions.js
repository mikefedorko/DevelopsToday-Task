import types from './action-types';

// Loader
const fetchRequest = () => ({
	type: types.FETCH_REQUEST
});
const fetchError = (error) => ({
	type: types.FETCH_ERROR,
	payload: error
});

// Fetch Posts
const fetchPostsSuccess = (postList) => ({
	type: types.FETCH_POSTS_SUCCESS,
	payload: {
		postList
	}
});

// Fetch Post By Id
const fetchPostByIdSuccess = (id) => ({
	type: types.FETCH_POST_BY_ID_SUCCESS,
	payload: id
});

// Add Comment
const addComment = (comment) => ({
	type: types.COMMENT_ADDED_SUCCESS,
	payload: comment
});

export default {
	fetchRequest,
	fetchError,
	fetchPostsSuccess,
	fetchPostByIdSuccess,
	addComment
};
