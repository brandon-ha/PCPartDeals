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

// SHOW_OUT_OF_STOCK
export const showOutOfStock = (status) => ({
    type: 'SHOW_OUT_OF_STOCK',
    status
});