import "./App.css";
import Column from "./components/Column";

function App() {
	return (
		<div className="App">
			<div className="title">
				<p>PLAN YOUR DAY</p>
			</div>
			<div className="tasks">
				<Column state="PLANNED" />
				<Column state="ONGOING" />
				<Column state="DONE" />
			</div>
		</div>
	);
}

export default App;
