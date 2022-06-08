const initialState = {
  searchTerm: "",
  clicked: false
}

export const searchReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FOCUS_SEARCHBAR':
      return {...state, clicked:true}
    case 'SET_SEARCH_TERM':
      return {...state, searchTerm: action.payload, clicked:true}
    case 'CLEAR_SEARCH_TERM':
      return {...state, searchTerm: "", clicked:false}
    default:
      return state;
  }
};
