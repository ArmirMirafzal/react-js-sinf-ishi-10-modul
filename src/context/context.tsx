import React, { useState, createContext } from "react";
import Inputs from "../components/inputs";
import Navbar from "../components/navbar";

export const AppContext = createContext<any>(null);
let count = 0;

function ContextTutorial() {
	const [username, setUsername] = useState("");
	let [arr, setArr] = useState<number[]>([]);
	const addInput = () => {
		setArr((prev: any) => [...prev, count++]);
	};

	return (
		<AppContext.Provider value={{ username, setUsername, arr, setArr, addInput }}>
			<div className="app">
				<Inputs />
				<Navbar />
			</div>
		</AppContext.Provider>
	);
}

export default ContextTutorial;
