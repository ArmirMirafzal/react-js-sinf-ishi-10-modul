import React from "react";
import ReactDOM from "react-dom/client";
import ContextTutorial from "./context/context";
import "./assets/main.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<ContextTutorial />
	</React.StrictMode>
);
