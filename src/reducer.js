const initialState = {
  page: 0,
  data: [],
  query: 'dog',
  selected: undefined
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'UPDATE_DATA':
      return {
        ...state,
        data: action.data
      }

    case 'UPDATE_SELECTED':
      return {
        ...state,
        selected: action.selected
      }

    case 'UPDATE_QUERY':
      return {
        ...state,
        query: action.query,
        page: 0
      }

    case 'NEXT_PAGE':
      return {
        ...state,
        page: state.page + 1
      }

    case 'PREV_PAGE':
      return {
        ...state,
        page: state.page - 1
      }

    default: return state;

  }
}

export default reducer;
