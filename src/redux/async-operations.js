import axios from 'axios';
import actions from './actions';

const getAllPosts = () => (dispatch) => {
	dispatch(actions.fetchRequest());
	axios
		.get('https://simple-blog-api.crew.red/posts/')
		.then(({ data }) => {
			dispatch(actions.fetchPostsSuccess(data));
		})
		.catch((error) => dispatch(actions.fetchError(error)));
};

const getPostById = (id) => (dispatch) => {
	dispatch(actions.fetchRequest());
	axios
		.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
		.then(({ data }) => {
			dispatch(actions.fetchPostByIdSuccess(data));
		})
		.catch((error) => dispatch(actions.fetchError(error)));
};

const addComment = (body) => (dispatch) => {
	dispatch(actions.fetchRequest());
	axios
		.post('https://simple-blog-api.crew.red/comments', { body })
		.then(({ data }) => {
			dispatch(actions.addComment(data));
		})
		.catch((error) => dispatch(actions.fetchError(error)));
};

export default { getAllPosts, getPostById, addComment };
