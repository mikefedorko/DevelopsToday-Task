const allPosts = (state) => state.posts.postList;
const post = (state) => state.postById;
const loader = (state) => state.isLoading;

export default { allPosts, post, loader };
