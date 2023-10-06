import { combineReducers } from 'redux';

import { reducer as todo } from './todo';

const reducer = combineReducers({ todo });

export default reducer;

export * from './todo';
