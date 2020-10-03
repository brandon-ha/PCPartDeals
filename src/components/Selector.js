import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import { setItem, setSort, setTime, setSearch } from '../actions/filters';
import { startSetPosts } from '../actions/posts';
import SearchBar from '../components/SearchBar';
import { Card } from 'react-bootstrap';

const parts = [
  { val: "cpu", label: "CPU" },
  { val: "gpu", label: "Video Card" },
  { val: "ram", label: "Memory" },
  { val: "mobo", label: "Motherboard" },
  { val: "psu", label: "Power Supply" },
  { val: "ssd", label: "SSD" },
  { val: "hdd", label: "Hard Drive" },
  { val: "case", label: "Case" },
  { val: "cooler", label: "Cooler" },
  { val: "fan", label: "Fan" }
];

const sorts = [
  { val: "hot", label: "Hot" },
  { val: "new", label: "New" },
  { val: "top", label: "Top" }
];

const Selector = (props) => {
  const [sticky, setSticky] = useState(false);

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const generateButton = (srcDir, buttonInfo, style) => {
    return (
      <ToggleButton value={buttonInfo.val} key={buttonInfo.label}>
        <img src={`${srcDir}/${buttonInfo.val}.svg`} alt={buttonInfo.label} className={style}/>{buttonInfo.label}
      </ToggleButton>
    );
  };

  const onItemChange = (value) => {
    props.setItem(value);
    scrollTop();
    props.startSetPosts();
  };

  const onSortChange = (value) => {
    props.setSort(value);
    scrollTop();
    props.startSetPosts();
  };

  const onTimeChange = (value) => {
    props.setTime(value);
    scrollTop();
    props.startSetPosts();
  };

  const onSearchChange = (value) => {
    props.setSearch(value);
    scrollTop();
    props.startSetPosts();
  }

  const checkScroll = () => {
    const offset = window.pageYOffset;
    if (offset > 104 && !sticky) {
        setSticky(true);
    } else if (offset <= 104 && sticky) {
        setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    
    return () => {
        window.removeEventListener('scroll', checkScroll);
    };
});

    return (
      <div className={sticky ? "selector-sticky" : "selector"}>
        <Accordion className="container selector__content">
          <Card className="selector__card">
            <Card.Header className="selector__card__header">
              <div className="selector__card-selectors">
                <Accordion.Toggle className="selector__button" as={Button} eventKey="0">
                  <p>Filter by Parts</p>
                </Accordion.Toggle>
                <Accordion.Toggle className="selector__button" as={Button} eventKey="1">
                <p>Posted by</p>
                </Accordion.Toggle>
                <SearchBar filters={props.filters} onChange={onSearchChange}/>
              </div>
                <ToggleButtonGroup className="selector-sorts" type="radio" name="sort" value={props.filters.sortBy} onChange={onSortChange}>
                  { sorts.map((sort) => generateButton('/images/sort', sort, "selector__sort-icon")) }
                  { props.filters.item === 'all' && !props.filters.search && 
                    <ToggleButton value="rising">
                      <img src="/images/sort/rising.svg" alt="Rising" className="selector__sort-icon"/>Rising
                    </ToggleButton>
                  }
                  { (props.filters.item !== 'all' || !!props.filters.search) && 
                    <ToggleButton value="relevance">
                      <img src="/images/sort/relevance.svg" alt="Relevance" className="selector__sort-icon"/>Relevance
                    </ToggleButton>
                  }
                </ToggleButtonGroup>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ToggleButtonGroup className="selector-parts" type="radio" name="item" value={props.filters.item} onChange={onItemChange}>
                    <ToggleButton value="all">All</ToggleButton>
                    { parts.map((part) => generateButton('/images/items', part, "selector__item-icon")) }
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