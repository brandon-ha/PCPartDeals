import { fetchPosts, fetchMorePosts } from '../selectors/posts';

export const addPost = (post) => ({
    type: 'ADD_POST',
    post
});

export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    posts
});

export const startSetPosts = () => {
    return (dispatch, getState) => {
        const filters = getState().filters;
        return fetchPosts(filters).then((res) => {
            dispatch(setPosts(res));
        });
    }
};

export const startGetMorePosts = () => {
    return (dispatch, getState) => {
        const posts = getState().posts;
        return fetchMorePosts(posts).then((res) => {
            dispatch(setPosts(res));
        });
    }
};