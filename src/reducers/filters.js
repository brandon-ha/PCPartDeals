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
          }
        case 'SET_SORT':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'showOutOfStock':
            return {
                ...state,
                showOutOfStock: action.showOutOfStock
            }
        default:
          return state;
      };
};