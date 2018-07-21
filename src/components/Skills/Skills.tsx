import * as React from "react";
import { Component } from "react";

import { SkillType } from "components/SkillType/SkillType";
import { SkillData } from "models/SkillData";

import "./Skills.css";

interface Props {
	data: {
		languages: SkillData[];
		technologies: SkillData[];
		tools: SkillData[];
	};
}

export class Skills extends Component<Props> {
	public render() {
		return (
			<div className="Skills">
				<SkillType skills={this.props.data.languages} type="Languages" />
				<SkillType skills={this.props.data.technologies} type="Technologies" />
				<SkillType skills={this.props.data.tools} type="Tools" />
			</div>
		);
	}
}
