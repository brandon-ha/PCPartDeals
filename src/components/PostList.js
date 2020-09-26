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
    if (props.flags.infiniteScroll) {
      window.addEventListener('scroll', trackScroll);

      return () => {
        window.removeEventListener('scroll', trackScroll);
      }
    }
   // eslint-disable-next-line
  }, [props.flags.infiniteScroll]);

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
    posts: state.posts,
    flags: state.flags
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      startGetMorePosts: () => dispatch(startGetMorePosts())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);