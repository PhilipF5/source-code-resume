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
			.map(j => (
				<Job
					employer={j.employer}
					end={j.end}
					highlights={j.highlights}
					location={j.location}
					start={j.start}
					title={j.title}
				/>
			));

		return (
			<PageSection title="Work History">{jobs}</PageSection>
		);
	}
}
