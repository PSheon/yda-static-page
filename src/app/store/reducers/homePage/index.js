import { combineReducers } from 'redux';
import carousels from './carousels.reducer';
import news from './news.reducer';

const fuseReducers = combineReducers({
  carousels,
  news
});

export default fuseReducers;
