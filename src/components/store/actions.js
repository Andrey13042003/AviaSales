export const cheap = (dispatch) => {
  dispatch({ type: 'THE_CHEAPEST' });
};

export const fast = (dispatch) => {
  dispatch({ type: 'THE_FASTEST' });
};

export const updateCheckBox = (dispatch, newArray) => {
  dispatch({ type: 'UPDATE_CHECKBOX', payload: newArray });
};