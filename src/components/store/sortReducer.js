const defaultValue = {
  name: 'THE_CHEAPEST',
};

const sortReducer = (state = defaultValue, action) => {
  switch (action.type) {
  case 'THE_CHEAPEST':
    return { ...state, name: action.type };
  case 'THE_FASTEST':
    return { ...state, name: action.type };
  default:
    return defaultValue;
  }
};

export default sortReducer;
