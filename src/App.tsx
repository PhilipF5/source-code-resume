import * as React from "react";
import { Component } from "react";

import { ContactInfo } from "components/ContactInfo/ContactInfo";
import { Education } from "components/Education/Education";
import { ExperienceList } from "components/ExperienceList/ExperienceList";
import { IntangibleList } from "components/IntangibleList/IntangibleList";
import { Skills } from "components/Skills/Skills";
import { WorkHistory } from "components/WorkHistory/WorkHistory";

import "./App.css";
import details from "./details.json";

export default class App extends Component {
	public render() {
		return (
			<div className="App">
				<ContactInfo bio={details.me.bio} contacts={details.me.contacts} name={details.me.name} />
				<Skills data={details.skills} />
				<ExperienceList items={details.experience} />
				<IntangibleList items={details.intangibles} />
				<WorkHistory jobs={details.jobs} />
				<Education credentials={details.education} />
			</div>
		);
	}
}
