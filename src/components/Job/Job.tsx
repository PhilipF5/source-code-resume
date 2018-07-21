import * as React from "react";
import { Component } from "react";

import "./Job.css";

interface IProps {
	employer: string,
	end: string,
	highlights: string[],
	location: string,
	start: string,
	title: string
}

export default class Job extends Component<IProps> {
	public render() {
		const highlights = this.props.highlights.map(h => {
			return (
				<li key={h}>{h}</li>
			);
		});

		return (
			<div className="Job">
				<div>
					<div className="Job-employer">
						{this.props.employer}, {this.props.location}
					</div>
					<div className="Job-dates">
						{this.props.start} – {this.props.end || "present"}
					</div>
				</div>
				<div className="Job-title">{this.props.title}</div>
				<div className="Job-highlights">
					<ul>{highlights}</ul>
				</div>
			</div>
		);
	}
}
