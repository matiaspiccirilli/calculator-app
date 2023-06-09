const initialState = {
    displayValue: ''
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_DISPLAY':
        return {
          ...state,
          displayValue: state.displayValue + action.payload
        };
      case 'CLEAR_DISPLAY':
        return {
          ...state,
          displayValue: ''
        };
      default:
        return state;
    }
  };
  
  export default reducer;