// SET_ITEM
export const setItem = (item = '') => ({
    type: 'SET_ITEM',
    item
});

// SORT_BY_HOT
export const sortByHot = () => ({
    type: 'SORT_BY_HOT'
});

// SORT_BY_NEW
export const sortByNew = () => ({
    type: 'SORT_BY_NEW'
});

// SHOW_OUT_OF_STOCK
export const showOutOfStock = (status) => ({
    type: 'SHOW_OUT_OF_STOCK',
    status
});