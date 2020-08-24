// SET_ITEM
export const setItem = (item = '') => ({
    type: 'SET_ITEM',
    item
});

// SET_SORT
export const setSort = (sortBy = '') => ({
    type: 'SET_SORT',
    sortBy
});

// SET_TIME
export const setTime = (time = '') => ({
    type: 'SET_TIME',
    time
});

// SET_SEARCH
export const setSearch = (search = '') => ({
    type: 'SET_SEARCH',
    search
});

// RESET_FILTERS
export const resetFilters = () => ({
    type: 'RESET_FILTERS'
});