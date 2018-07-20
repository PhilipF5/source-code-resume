import * as React from "react";
import { Component } from "react";

import "./App.css";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import Education from "./components/Education/Education";
import ExperienceList from "./components/ExperienceList/ExperienceList";
import IntangibleList from "./components/IntangibleList/IntangibleList";

import details from "./details.json";

export default class App extends Component {
	public render() {
		return (
			<div className="App">
				<ContactInfo data={details.me} />
				<ExperienceList items={details.experience} />
				<IntangibleList items={details.intangibles} />
				<Education credentials={details.education} />
			</div>
		);
	}
}
