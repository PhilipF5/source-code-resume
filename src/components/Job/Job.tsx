import * as React from "react";
import { Component } from "react";

import moment from "moment";

import { List } from "components/List/List";
import { JobData } from "models/JobData";
import { RoleData } from "models/RoleData";
import { SyntacticEngine } from "utilities/SyntacticEngine";

import "./Job.css";

export class Job extends Component<JobData> {
	public render() {
		return (
			<div className="Job">
				<div className="Job-employer">{this.getEmployer()}</div>
				<div className="Job-job">{this.getJobs()}</div>
				<div className="Job-highlights">
					<ul />
				</div>
			</div>
		);
	}

	public getEmployer(): JSX.Element {
		return SyntacticEngine.applyOperator(
			SyntacticEngine.objectName(SyntacticEngine.snakeCase(this.props.employer)),
			"=",
			SyntacticEngine.addCurlyBrackets(
				1,
				SyntacticEngine.addPropertyLabel("location", SyntacticEngine.string(this.props.location))
			)
		);
	}

	public getJob(r: RoleData): JSX.Element {
		return SyntacticEngine.addPropertyLabel(
			"job",
			SyntacticEngine.addCurlyBrackets(
				1,
				...SyntacticEngine.separateWithComma(
					SyntacticEngine.addPropertyLabel("title", SyntacticEngine.string(r.title)),
					SyntacticEngine.addPropertyLabel("start", SyntacticEngine.string(this.getStartDate(r))),
					SyntacticEngine.addPropertyLabel(
						"end",
						this.getEndDate(r)
							? SyntacticEngine.string(this.getEndDate(r))
							: SyntacticEngine.typeName("undefined")
					)
				)
			)
		);
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

	private getEndDate(role: RoleData): string {
		return role.end ? this.getDate(role.end) : null;
	}

	private getStartDate(role: RoleData): string {
		return this.getDate(role.start);
	}
}
