import * as React from "react";
import { Component } from "react";

import SyntacticEngine from "utilities/SyntacticEngine";

import "./PageSection.css";

interface IProps {
	title: string;
}

export default class PageSection extends Component<IProps> {
	public render() {
		return (
			<div className="PageSection">
				<div className="PageSection-title">{SyntacticEngine.commentRegular(this.props.title)}</div>
				{this.props.children}
			</div>
		);
	}
}
