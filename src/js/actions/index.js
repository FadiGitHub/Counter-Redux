import { addOne, subOne } from '../constants';

export function addOneToCounter() {
	return {
		type: addOne,
		payload: 1
	};
}
export function subOneToCounter() {
	return {
		type: subOne,
		payload: 1
	};
}
