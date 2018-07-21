import * as React from "react";
import { Component } from "react";

import SkillType from "../SkillType/SkillType";
import "./Skills.css";

interface Props {
	data: {
		languages: any[];
		technologies: any[];
		tools: any[];
	};
}

export default class Skills extends Component<Props> {
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
