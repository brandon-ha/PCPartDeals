import React from 'react';
import { connect } from 'react-redux';
import { setItem, setSort } from '../actions/filters';
import { startSetPosts } from '../actions/posts';

const Selector = (props) => {
  const onItemChange = (e) => {
    props.setItem(e.target.value);
    props.startSetPosts();
  };

  const onSortChange = (e) => {
    props.setSort(e.target.value);
    props.startSetPosts();
  };

    return (
      <div className="selector">
        <div className="container selector__content">
          <select value={props.filters.item} onChange={onItemChange}>
            <option value="all">All</option>
            <option value="cpu">CPU</option>
            <option value="gpu">Video Card</option>
            <option value="ram">Memory</option>
            <option value="mobo">Motherboard</option>
            <option value="psu">Power Supply</option>
            <option value="hdd">Hard Drive</option>
            <option value="ssd">SSD</option>
            <option value="case">Case</option>
            <option value="cooler">Cooler</option>
            <option value="fan">Fan</option>
          </select>
          <select value={props.filters.sortBy} onChange={onSortChange}>
            <option value="hot">Hot</option>
            <option value="new">New</option>
            <option value="top">Top</option>
            <option value="relevance">Relevance</option>
          </select>
        </div>
      </div>
    );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setItem: (item) => dispatch(setItem(item)),
    startSetPosts: () => dispatch(startSetPosts()),
    setSort: (sort) => dispatch(setSort(sort))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);