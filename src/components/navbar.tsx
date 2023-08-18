import React, { useContext } from "react";
import { AppContext } from "../context/context";

const Navbar = () => {
	const { username } = useContext(AppContext);

	return (
		<div>
			<h1>1: {username}</h1>
		</div>
	);
};

export default Navbar;
