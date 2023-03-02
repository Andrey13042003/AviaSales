import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import sortReducer from './sortReducer';
import { checkBoxReducer } from './checkBoxReducer';

const rootReducer = combineReducers({
  sort: sortReducer,
  box: checkBoxReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
