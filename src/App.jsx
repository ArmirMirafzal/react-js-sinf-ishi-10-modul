import { useReducer } from "react";

const reducerUseState = (prevState, dispatch) => (typeof dispatch === "function" ? dispatch(prevState) : dispatch);

const intializationUseState = (initial) => (typeof initial === "function" ? initial(initial) : initial);

const useState = (initialValue) => {
	return useReducer(reducerUseState, initialValue, intializationUseState);
};

function App() {
	const [count, setCount] = useState(() => 0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<button onClick={handleClick}>Increment</button>
			<div>{count}</div>
		</div>
	);
}

export default App;
