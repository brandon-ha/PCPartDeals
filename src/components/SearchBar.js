import React, { useState, useEffect } from 'react';

const WAIT_INTERVAL = 300;
const ENTER_KEYCODE = 13;

const SearchBar = (props) => {
    const [timer, setTimer] = useState(0);
    const [searchValue, setSearchValue] = useState(props.filters.search);

    useEffect(() => {
        setSearchValue(props.filters.search);
    }, [props.filters.search]);

    const onKeyDown = (e) => {
        if (e.keyCode === ENTER_KEYCODE) {
            props.onChange(searchValue);
        }
    };

    const handleChange = (e) => {
        const entered = e.target.value;
        clearTimeout(timer);
        setSearchValue(entered);
        setTimer(setTimeout(() => {
            props.onChange(entered)
        }, WAIT_INTERVAL));
    };

    return (
        <input className="searchbar" placeholder="Search" value={searchValue} onChange={(e) => handleChange(e)} onKeyDown={(e) => onKeyDown(e)}/>
    );
};

export default SearchBar;