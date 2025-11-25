import "./App.css";
import type { Test } from "@chinook/types";

function App() {
	const test: Test = {
		test: true,
	};

	return <div className="test">{test.test.toString()}</div>;
}

export default App;
