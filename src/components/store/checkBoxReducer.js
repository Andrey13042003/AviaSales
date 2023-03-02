const defaultValue = {
  checkedBoxes: [
    { label: 'Все', name: 'all', isCheck: false, key: 'all' },
    { label: 'Без пересадок', name: '0', isCheck: false, key: '0' },
    { label: '1 пересадка', name: '1', isCheck: false, key: '1' },
    { label: '2 пересадки', name: '2', isCheck: false, key: '2' },
    { label: '3 пересадки', name: '3', isCheck: false, key: '3' },
  ],
};

export const checkBoxReducer = (state = defaultValue, action) => {
  switch (action.type) {
  case 'UPDATE_CHECKBOX':
    return { ...state, checkedBoxes: action.payload };
  default:
    return defaultValue;
  }
};
