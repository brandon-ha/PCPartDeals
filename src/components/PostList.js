import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { startGetMorePosts } from '../actions/posts';

const PostList = (props) => {
  const trackScroll = () => {
    const list = document.getElementById('post-list');
    if (list.getBoundingClientRect().bottom <= window.innerHeight) {
      props.startGetMorePosts();
      window.removeEventListener('scroll', trackScroll);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', trackScroll);

    return () => {
      window.removeEventListener('scroll', trackScroll);
    }
  });

  return (
    <div id="post-list" className="container list">
    {
      props.posts.length === 0 ?
        <div>
          No deals available!
        </div>
      :
        props.posts.map((postInfo) => (
          <Post key={postInfo.id} {...postInfo} />
        ))
    }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      startGetMorePosts: () => dispatch(startGetMorePosts())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);