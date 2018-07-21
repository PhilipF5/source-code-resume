import * as React from "react";
import { Component } from "react";

import { SkillData } from "models/SkillData";

import "./SkillType.css";

interface Props {
	skills: SkillData[];
	type: string;
}

export class SkillType extends Component<Props> {
	public render() {
		return (
			<div className="SkillType">
				<div className="SkillType-type">{this.props.type}</div>
				<div className="SkillType-top">
					<div className="SkillType-label">Top Skills:</div>
					<ul>{this.getTopSkills()}</ul>
				</div>
				<div className="SkillType-other">
					<div className="SkillType-label">Also familiar with:</div>
					<ul>{this.getOtherSkills()}</ul>
				</div>
			</div>
		);
	}

	private getOtherSkills() {
		return this.sortAndRenderSkills(this.props.skills.filter(s => !s.top));
	}

	private getTopSkills() {
		return this.sortAndRenderSkills(this.props.skills.filter(s => s.top));
	}

	private sortAndRenderSkills(skills: Array<{ name: string; top?: boolean }>) {
		return skills
			.sort((a, b) => {
				if (a.name < b.name) {
					return -1;
				} else {
					return 1;
				}
			})
			.map(s => {
				return <li key={s.name}>{s.name}</li>;
			});
	}
}
