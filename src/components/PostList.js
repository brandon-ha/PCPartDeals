import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

const PostList = (props) => (
  <div className="container list">
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

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
};

export default connect(mapStateToProps)(PostList);