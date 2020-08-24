const filtersReducerDefaults = {
    item: 'all',
    sortBy: 'hot',
    time: 'all',
    search: ''
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
        case 'SET_TIME':
            return {
                ...state,
                time: action.time
            }
        case 'SET_SEARCH':
            return {
                ...state,
                search: action.search
            }
        case 'RESET_FILTERS':
            return {
                ...filtersReducerDefaults
            }
        default:
          return state;
      };
};