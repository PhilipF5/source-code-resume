import * as React from "react";
import { Component } from "react";

import moment from "moment";

import List from "components/List/List";
import SyntacticEngine from "utilities/SyntacticEngine";

import "./Job.css";

interface IProps {
	employer: string;
	location: string;
	roles: Role[];
}

interface Role {
	end?: string;
	highlights: string[];
	start: string;
	title: string;
}

export default class Job extends Component<IProps> {
	public render() {
		return (
			<div className="Job">
				<div className="Job-employer">
					{this.getEmployer()}
				</div>
				<div className="Job-job">
					{this.getJobs()}
				</div>
				<div className="Job-highlights">
					<ul />
				</div>
			</div>
		);
	}

	public getEmployer(): JSX.Element {
		//return SyntacticEngine.addPropertyLabel("employer", SyntacticEngine.addCurlyBrackets(1, ...SyntacticEngine.separateWithComma(SyntacticEngine.addPropertyLabel("name", SyntacticEngine.string(this.props.employer)), SyntacticEngine.addPropertyLabel("location", SyntacticEngine.string(this.props.location)))))
		return SyntacticEngine.applyOperator(SyntacticEngine.objectName(SyntacticEngine.snakeCase(this.props.employer)), "=", SyntacticEngine.addCurlyBrackets(1, SyntacticEngine.addPropertyLabel("location", SyntacticEngine.string(this.props.location))));
	}

	public getJob(r: Role): JSX.Element {
		return SyntacticEngine.addPropertyLabel("job", SyntacticEngine.addCurlyBrackets(1, ...SyntacticEngine.separateWithComma(SyntacticEngine.addPropertyLabel("title", SyntacticEngine.string(r.title)), SyntacticEngine.addPropertyLabel("start", SyntacticEngine.string(this.getStartDate(r))), SyntacticEngine.addPropertyLabel("end", this.getEndDate(r) ? SyntacticEngine.string(this.getEndDate(r)) : SyntacticEngine.typeName("undefined")))))
	}

	public getJobs(): JSX.Element[] {
		return this.props.roles
			.sort((a, b) => {
				if (a.start > b.start) {
					return -1;
				} else {
					return 1;
				}
			})
			.map(r => {
				return (
					<div key="r.title" className="Job-role">
						{this.getJob(r)}
						<List items={r.highlights} />
					</div>
				);
			});
	}

	private getDate(date: string): string {
		return moment(date).format("YYYY-MM-DD");
	}

	private getEndDate(role: Role): string {
		return role.end ? this.getDate(role.end) : null;
	}

	private getStartDate(role: Role): string {
		return this.getDate(role.start);
	}
}
