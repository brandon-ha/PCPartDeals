import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { startGetMorePosts } from '../actions/posts';
import Loading from './Loading';
import '../thumbnail/grabber';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PostList = (props) => {
  const trackScroll = () => {
    if (props.flags.infiniteScroll) {
      const list = document.getElementById('post-list');
      if (list.getBoundingClientRect().bottom <= window.innerHeight) {
        props.startGetMorePosts();
        window.removeEventListener('scroll', trackScroll);
      }
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', trackScroll);

    return () => {
      window.removeEventListener('scroll', trackScroll);
    }
  });

  return (
    <>
      { props.flags.loading === 'start' && <Loading /> }
      <TransitionGroup id="post-list" className="container list">
        {
          props.posts.map((postInfo) => (
            <CSSTransition key={postInfo.id} timeout={500} classNames="list-item">
              <Post  {...postInfo} />
            </CSSTransition>
          ))
        }
      </TransitionGroup>
      { props.flags.loading === 'end' && <Loading /> }
    </>
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