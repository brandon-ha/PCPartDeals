import React from 'react';
import { connect } from 'react-redux';
import { setItem, setSort, setTime, setSearch } from '../actions/filters';
import { startSetPosts } from '../actions/posts';
import SearchBar from '../components/SearchBar';

const Selector = (props) => {
  const onItemChange = (e) => {
    props.setItem(e.target.value);
    props.startSetPosts();
  };

  const onSortChange = (e) => {
    props.setSort(e.target.value);
    props.startSetPosts();
  };

  const onTimeChange = (e) => {
    props.setTime(e.target.value);
    props.startSetPosts();
  };

  const onSearchChange = (value) => {
    props.setSearch(value);
    props.startSetPosts();
  } 

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
            {props.filters.item === 'all' && <option value="rising">Rising</option>}
            {props.filters.item !== 'all' && <option value="relevance">Relevance</option>}
          </select>
          <select value={props.filters.time} onChange={onTimeChange}>
            <option value="hour">Past Hour</option>
            <option value="day">Past Day</option>
            <option value="week">Past Week</option>
            <option value="month">Past Month</option>
            <option value="year">Past Year</option>
            <option value="all">All</option>
          </select>
          <SearchBar filters={props.filters} onChange={onSearchChange}/>
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
    setSort: (sort) => dispatch(setSort(sort)),
    setTime: (time) => dispatch(setTime(time)),
    setSearch: (terms) => dispatch(setSearch(terms))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);