import { addOne, subOne } from '../constants';

const counter = function(state = 0, action) {
	if (action.type === addOne) {
		return state + action.payload;
	}
	if (action.type === subOne) {
		return state - action.payload;
	}
	return state;
};

export default counter;
