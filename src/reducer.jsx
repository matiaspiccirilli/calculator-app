const initialState = {
    displayValue: '0',
    formula: '',
    result: null,
    lastOperator: ''
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_DISPLAY':
        return updateDisplay(state, action.payload);
      case 'CLEAR_DISPLAY':
        return clearDisplay();
      case 'CALCULATE_RESULT':
        return calculateResult(state);
      default:
        return state;
    }
  };
  
  const updateDisplay = (state, value) => {
    let { displayValue, formula, result, lastOperator } = state;
  
    if (displayValue === '0' && value === '0') {
      return state; // Ignore multiple leading zeros
    }
  
    if (displayValue === '0' || displayValue === '' || displayValue === '-' || result !== null) {
      displayValue = '';
    }
  
    if (value === '.' && displayValue.includes('.')) {
      return state; // Ignore multiple decimal points in one number
    }
  
    displayValue += value;
    formula += value;
  
    if (value === '+' || value === '-' || value === '*' || value === '/') {
      if (lastOperator === '') {
        formula = formula.replace(/\/$/g, ''); // Remove trailing division operator
        formula = formula.replace(/\*$/g, ''); // Remove trailing multiplication operator
      } else {
        formula = formula.replace(/(\+|-|\/|\*)$/g, value); // Replace the last operator with the new one
      }
      lastOperator = value;
    }
  
    return {
      ...state,
      displayValue,
      formula,
      result: null,
      lastOperator
    };
  };
  
  const clearDisplay = () => ({
    ...initialState
  });
  
  const calculateResult = (state) => {
    let { formula } = state;
  
    formula = formula.replace(/(\+|-|\/|\*)$/g, ''); // Remove trailing operator
  
    // Calculate the result using the eval() function
    let result;
    try {
      result = eval(formula);
    } catch (error) {
      result = 'Error';
    }
  
    return {
      ...state,
      displayValue: result.toString(),
      formula,
      result
    };
  };
  
  export default reducer;
  