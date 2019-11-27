import { combineReducers } from 'redux';
import image from './image.reducer';
import document from './document.reducer';

const fuseReducers = combineReducers({
	image,
	document,
});

export default fuseReducers;
