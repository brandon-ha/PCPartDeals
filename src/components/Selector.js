import React from 'react';
import { connect } from 'react-redux';
import { setItem } from '../actions/filters';

const Selector = (props) => {
    return (
      <div className="selector">
        <div className="container selector__content">
          <select value={props.filters.item} onChange={(e) => props.setItem(e.target.value)}>
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
    setItem: (item) => dispatch(setItem(item))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);