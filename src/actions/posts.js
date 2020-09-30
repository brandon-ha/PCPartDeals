import { fetchPosts, fetchMorePosts } from '../selectors/posts';
import { setLoading } from './flags';

export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    posts
});

export const startSetPosts = () => {
    return (dispatch, getState) => {
        const filters = getState().filters;
        dispatch(setLoading('start'));
        return fetchPosts(filters).then((res) => {
            dispatch(setPosts(res));
            dispatch(setLoading(null));
        });
    }
};

export const startGetMorePosts = () => {
    return (dispatch, getState) => {
        const posts = getState().posts;
        dispatch(setLoading('end'));
        return fetchMorePosts(posts).then((res) => {
            dispatch(setPosts(res));
            dispatch(setLoading(null));
        });
    }
};