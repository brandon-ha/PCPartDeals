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
          <Card className="selector__card">
            <Card.Header className="selector__card__header">
              <div className="selector__card-selectors">
                <Accordion.Toggle as={Button} eventKey="0">
                  Filter by Parts
                </Accordion.Toggle>
                <Accordion.Toggle as={Button} eventKey="1">
                  Posted by
                </Accordion.Toggle>
                <SearchBar filters={props.filters} onChange={onSearchChange}/>
              </div>
              <div className="selector__card-sort" >
                <ToggleButtonGroup type="radio" name="sort" value={props.filters.sortBy} onChange={onSortChange}>
                  <ToggleButton value="hot">
                      <img src="/images/sort/hot.svg" alt="Hot" className="selector__sort-icon"/>Hot
                  </ToggleButton>
                  <ToggleButton value="new">
                    <img src="/images/sort/new.svg" alt="New" className="selector__sort-icon"/>New
                  </ToggleButton>
                  <ToggleButton value="top">
                    <img src="/images/sort/top.svg" alt="Top" className="selector__sort-icon"/>Top
                  </ToggleButton>
                  {props.filters.item === 'all' && !props.filters.search && 
                    <ToggleButton value="rising">
                      <img src="/images/sort/rising.svg" alt="Rising" className="selector__sort-icon"/>Rising
                      </ToggleButton>
                  }
                  {(props.filters.item !== 'all' || !!props.filters.search) && 
                    <ToggleButton value="relevance">
                      <img src="/images/sort/star.svg" alt="Relevance" className="selector__sort-icon"/>Relevance
                    </ToggleButton>
                  }
                </ToggleButtonGroup>
              </div>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ToggleButtonGroup type="radio" name="item" value={props.filters.item} onChange={onItemChange}>
                    <ToggleButton value="all">All</ToggleButton>
                    <ToggleButton value="cpu">
                      <img src="/images/items/cpu.svg" alt="CPU" className="selector__item-icon"/>CPU
                    </ToggleButton>
                    <ToggleButton value="gpu">
                      <img src="/images/items/gpu.svg" alt="GPU" className="selector__item-icon"/>Video Card
                    </ToggleButton>
                    <ToggleButton value="ram">
                      <img src="/images/items/ram.svg" alt="RAM" className="selector__item-icon"/>Memory
                    </ToggleButton>
                    <ToggleButton value="mobo">
                      <img src="/images/items/mobo.svg" alt="Motherboard" className="selector__item-icon"/>Motherboard
                    </ToggleButton>
                    <ToggleButton value="psu">
                      <img src="/images/items/psu.svg" alt="Power Supply" className="selector__item-icon"/>Power Supply
                    </ToggleButton>
                    <ToggleButton value="hdd">
                      <img src="/images/items/hdd.svg" alt="Motherboard" className="selector__item-icon"/>Hard Drive
                    </ToggleButton>
                    <ToggleButton value="ssd">
                      <img src="/images/items/ssd.svg" alt="SSD" className="selector__item-icon"/>SSD
                    </ToggleButton>
                    <ToggleButton value="case">
                      <img src="/images/items/case.svg" alt="Case" className="selector__item-icon"/>Case
                    </ToggleButton>
                    <ToggleButton value="cooler">
                      <img src="/images/items/cooler.svg" alt="Cooler" className="selector__item-icon"/>Cooler
                    </ToggleButton>
                    <ToggleButton value="fan">
                      <img src="/images/items/fan.svg" alt="Fan" className="selector__item-icon"/>Fan
                      </ToggleButton>
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
          </Card>
        </Accordion>
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