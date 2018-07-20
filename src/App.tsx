import * as React from "react";
import "./App.css";

import ContactInfo from "./components/ContactInfo/ContactInfo";
import ExperienceList from "./components/ExperienceList/ExperienceList";
import IntangibleList from "./components/IntangibleList/IntangibleList";

import details from "./details.json";

class App extends React.Component {
	public render() {
		return (
			<div className="App">
				<ContactInfo data={details} />
				<ExperienceList items={details.experience} />
				<IntangibleList items={details.intangibles} />
			</div>
		);
	}
}

export default App;
