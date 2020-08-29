import React from 'react';
import { connect } from 'react-redux';
import { resetFilters } from '../actions/filters';
import { startSetPosts } from '../actions/posts.js';

const Header = (props) => {
  const onClick = () => {
    props.resetFilters();
    props.startSetPosts();
  };

  return (
    <header className="header">
    <div className="container header__content">
      <button className="header__title" onClick={onClick}>
        <h1>PCPartDeals</h1>
      </button>
    </div>
  </header>
)};

const mapDispatchToProps = (dispatch) => {
  return {
    resetFilters: () => dispatch(resetFilters()),
    startSetPosts: () => dispatch(startSetPosts())
  }
};

export default connect(undefined, mapDispatchToProps)(Header);