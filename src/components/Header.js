import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link className="header__title" onClick={onClick}>
        <h1>PCPartDeals</h1>
      </Link>
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