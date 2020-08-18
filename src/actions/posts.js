import sub from '../reddit/reddit';

export const addPost = (post) => ({
    type: 'ADD_POST',
    post
});

export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    posts
});

export const startSetPosts = () => {
    return (dispatch) => {
        return sub.getHot().then((res) => {
            console.log(res);
            dispatch(setPosts(res));
        });
    }
};