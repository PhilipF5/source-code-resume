import * as React from "react";
import { Component } from "react";

import { SyntacticEngine } from "utilities/SyntacticEngine";

import "./PageSection.css";

interface Props {
	title: string;
}

export class PageSection extends Component<Props> {
	public render() {
		return (
			<div className="PageSection">
				<div className="PageSection-title">{SyntacticEngine.commentRegular(this.props.title)}</div>
				{this.props.children}
			</div>
		);
	}
}
