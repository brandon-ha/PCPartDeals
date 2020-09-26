import React from 'react';
import { connect } from 'react-redux';
import { resetFilters } from '../actions/filters';
import { startSetPosts } from '../actions/posts';
import { toggleInfiniteScroll } from '../actions/flags';
import { FaRegPauseCircle, FaRegPlayCircle } from 'react-icons/fa';

const Header = (props) => {
  const toggleInfiniteScroll = () => {
    props.toggleInfiniteScroll();
  };

  return (
    <header className="header p-4">
      <div className="header__content">
        <a className="header__title" href="/">
          <h1>PCPartDeals</h1>
        </a>
        { props.flags.infiniteScroll && <FaRegPauseCircle className="header__pause-button" onClick={toggleInfiniteScroll} /> }
        { !props.flags.infiniteScroll && <FaRegPlayCircle className="header__pause-button" onClick={toggleInfiniteScroll} /> }
      </div>
  </header>
)};

const mapStateToProps= (state) => {
  return {
    flags: state.flags
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetFilters: () => dispatch(resetFilters()),
    startSetPosts: () => dispatch(startSetPosts()),
    toggleInfiniteScroll: () => dispatch(toggleInfiniteScroll()), 
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);