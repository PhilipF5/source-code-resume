import * as React from "react";
import { Component } from "react";

import Job from "../Job/Job";
import PageSection from "../PageSection/PageSection";
import "./WorkHistory.css";

interface IProps {
	jobs: any[];
}

export default class WorkHistory extends Component<IProps> {
	public render() {
		const jobs = this.props.jobs
			.sort((a, b) => {
				if (a.start > b.start) {
					return -1;
				} else {
					return 1;
				}
			})
			.map(j => <Job key={j.employer} employer={j.employer} location={j.location} roles={j.roles} />);

		return <PageSection title="Work History">{jobs}</PageSection>;
	}
}
