import * as React from "react";
import "./App.css";

import ContactInfo from "./components/ContactInfo/ContactInfo";

import details from "./details.json";

class App extends React.Component {
	public render() {
		return (
			<div className="App">
				<ContactInfo data={details} />
			</div>
		);
	}
}

export default App;
