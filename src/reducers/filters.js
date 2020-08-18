const filtersReducerDefaults = {
    item: 'all',
    sortBy: 'hot',
    showOutOfStock: true
};

export default (state = filtersReducerDefaults, action) => {
    switch (action.type) {
        case 'SET_ITEM':
          return {
            ...state,
            item: action.item
          };
        case 'SORT_BY_HOT':
            return {
                ...state,
                sortBy: 'hot'
            };
        case 'SORT_BY_NEW':
            return {
                ...state,
                sortBy: 'new'
            };
        case 'showOutOfStock':
            return {
                ...state,
                showOutOfStock: action.showOutOfStock
            }
        default:
          return state;
      };
};