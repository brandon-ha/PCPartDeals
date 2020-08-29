import React from 'react';
import { connect } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import { setItem, setSort, setTime, setSearch } from '../actions/filters';
import { startSetPosts } from '../actions/posts';
import SearchBar from '../components/SearchBar';
import { Card } from 'react-bootstrap';

const Selector = (props) => {
  const onItemChange = (value) => {
    props.setItem(value);
    props.startSetPosts();
  };

  const onSortChange = (value) => {
    props.setSort(value);
    props.startSetPosts();
  };

  const onTimeChange = (value) => {
    props.setTime(value);
    props.startSetPosts();
  };

  const onSearchChange = (value) => {
    props.setSearch(value);
    props.startSetPosts();
  } 

    return (
      <div className="selector">
        <Accordion className="container selector__content">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} eventKey="0">
                Filter by Parts
              </Accordion.Toggle>
              <Accordion.Toggle as={Button} eventKey="1">
                Sort by
              </Accordion.Toggle>
              <SearchBar filters={props.filters} onChange={onSearchChange}/>
              <ToggleButtonGroup type="radio" name="sort" value={props.filters.sortBy} onChange={onSortChange}>
                <ToggleButton value="hot">Hot</ToggleButton>
                <ToggleButton value="new">New</ToggleButton>
                <ToggleButton value="top">Top</ToggleButton>
                {props.filters.item === 'all' && <ToggleButton value="rising">Rising</ToggleButton>}
                {props.filters.item !== 'all' && <ToggleButton value="relevance">Relevance</ToggleButton>}
              </ToggleButtonGroup>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="selector__card_body">
                  <ToggleButtonGroup type="radio" name="item" value={props.filters.item} onChange={onItemChange}>
                    <ToggleButton value="all">All</ToggleButton>
                    <ToggleButton value="cpu">CPU</ToggleButton>
                    <ToggleButton value="gpu">Video Card</ToggleButton>
                    <ToggleButton value="ram">Memory</ToggleButton>
                    <ToggleButton value="mobo">Motherboard</ToggleButton>
                    <ToggleButton value="psu">Power Supply</ToggleButton>
                    <ToggleButton value="hdd">Hard Drive</ToggleButton>
                    <ToggleButton value="ssd">SSD</ToggleButton>
                    <ToggleButton value="case">Case</ToggleButton>
                    <ToggleButton value="cooler">Cooler</ToggleButton>
                    <ToggleButton value="fan">Fan</ToggleButton>
                  </ToggleButtonGroup>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="selector__card_body">
                  <ToggleButtonGroup type="radio" name="time" value={props.filters.time} onChange={onTimeChange}>
                    <ToggleButton value="hour">Past Hour</ToggleButton>
                    <ToggleButton value="day">Past Day</ToggleButton>
                    <ToggleButton value="week">Past Week</ToggleButton>
                    <ToggleButton value="month">Past Month</ToggleButton>
                    <ToggleButton value="year">Past Year</ToggleButton>
                    <ToggleButton value="all">All</ToggleButton>
                  </ToggleButtonGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card.Header>
          </Card>
        </Accordion>
      </div>
    );
};

          // <select value={props.filters.item} onChange={onItemChange}>
          //   <option value="all">All</option>
          //   <option value="cpu">CPU</option>
          //   <option value="gpu">Video Card</option>
          //   <option value="ram">Memory</option>
          //   <option value="mobo">Motherboard</option>
          //   <option value="psu">Power Supply</option>
          //   <option value="hdd">Hard Drive</option>
          //   <option value="ssd">SSD</option>
          //   <option value="case">Case</option>
          //   <option value="cooler">Cooler</option>
          //   <option value="fan">Fan</option>
          // </select>
          // <select value={props.filters.sortBy} onChange={onSortChange}>
          //   <option value="hot">Hot</option>
          //   <option value="new">New</option>
          //   <option value="top">Top</option>
          //   {props.filters.item === 'all' && <option value="rising">Rising</option>}
          //   {props.filters.item !== 'all' && <option value="relevance">Relevance</option>}
          // </select>
          // <select value={props.filters.time} onChange={onTimeChange}>
          //   <option value="hour">Past Hour</option>
          //   <option value="day">Past Day</option>
          //   <option value="week">Past Week</option>
          //   <option value="month">Past Month</option>
          //   <option value="year">Past Year</option>
          //   <option value="all">All</option>
          // </select>

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