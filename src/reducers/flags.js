const flagsReducerDefaults = {
    darkMode: false,
    loading: 'start',
    infiniteScroll: true
};

export default (state = flagsReducerDefaults, action) => {
    switch (action.type) {
        case 'TOGGLE_DARKMODE':
          return {
                ...state,
                darkMode: !state.darkMode
          }
        case 'SET_LOADING':
          return {
                ...state,
                loading: action.loading
          }
        case 'TOGGLE_INFINITE_SCROLL':
          return {
                ...state,
                infiniteScroll: !state.infiniteScroll
          }
        default:
          return state;
      };
};