// @ts-nocheck

export const createStore = (reducer) => {
	let state;
	const listeners = [];

	function dispatch(action) {
		state = reducer(state, action);

		for (const listener of listeners) {
			listener();
		}
	}

	function getState() {
		return state;
	}

	function subscribe(listener) {
		listeners.push(listener);
	}

	return {
		dispatch,
		getState,
		subscribe,
	};
};
