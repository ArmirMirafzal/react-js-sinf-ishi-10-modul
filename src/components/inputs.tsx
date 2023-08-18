import { useContext } from "react";
import { AppContext } from "../context/context";

interface AddInputProps {}
let count = 0;

const Inputs = () => {
	const { setUsername, arr, addInput } = useContext(AppContext);

	return (
		<div>
			<button onClick={addInput}>Add</button>

			<div style={{ marginTop: 10, display: "grid", gap: 10 }}>
				{arr.map((item: any) => (
					<div key={item} style={{ display: "flex", gap: 5 }}>
						<span>{item + 1}.</span>
						<input type="text" name="" id="" />
						<button>❌</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Inputs;
