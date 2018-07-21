import * as React from "react";
import { Component } from "react";

import { SkillData } from "models/SkillData";
import { SyntacticEngine } from "utilities/SyntacticEngine";

import "./SkillType.css";

interface Props {
	skills: SkillData[];
	type: string;
}

export class SkillType extends Component<Props> {
	public render() {
		return (
			<div className="SkillType">
				<div className="SkillType-type">{this.getHeader()}</div>
				<div className="SkillType-top">
					{SyntacticEngine.indent()}{SyntacticEngine.string("Top skills")}:&nbsp;
					{this.getTopSkills()}
				</div>
				<div className="SkillType-other">
					{SyntacticEngine.indent()}{SyntacticEngine.string("Also used")}:&nbsp;
					{this.getOtherSkills()}
				</div>
				{SyntacticEngine.bracketRightCurly(1)};
			</div>
		);
	}

	private getHeader(): JSX.Element {
		return SyntacticEngine.applyOperator(SyntacticEngine.objectName(this.props.type), "=", SyntacticEngine.bracketLeftCurly(1));
	}

	private getOtherSkills() {
		return this.sortAndRenderSkills(this.props.skills.filter(s => !s.top));
	}

	private getTopSkills() {
		return this.sortAndRenderSkills(this.props.skills.filter(s => s.top));
	}

	private renderSkills(skills: SkillData[]): JSX.Element {
		let domSkills = skills.map(s => SyntacticEngine.string(s.name));
		return SyntacticEngine.addBrackets(2, ...SyntacticEngine.separateWithComma(...domSkills));
	}

	private sortAndRenderSkills(skills: SkillData[]): JSX.Element {
		return this.renderSkills(this.sortSkills(skills));
	}

	private sortSkills(skills: SkillData[]): SkillData[] {
		return skills.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			} else {
				return 1;
			}
		});
	}
}
