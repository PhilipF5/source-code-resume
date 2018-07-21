import * as React from "react";
import { Component } from "react";

import { Job } from "components/Job/Job";
import { PageSection } from "components/PageSection/PageSection";
import { JobData } from "models/JobData";

import "./WorkHistory.css";

interface Props {
	jobs: JobData[];
}

export class WorkHistory extends Component<Props> {
	public render() {
		const jobs = this.props.jobs
			.sort((a, b) => {
				let aStart = Math.max(...a.roles.map(r => +r.start.replace(/\-/g, "")));
				let bStart = Math.max(...b.roles.map(r => +r.start.replace(/\-/g, "")));
				if (aStart > bStart) {
					return -1;
				} else {
					return 1;
				}
			})
			.map(j => <Job key={j.employer} employer={j.employer} location={j.location} roles={j.roles} />);

		return <PageSection title="Work History">{jobs}</PageSection>;
	}
}
