import * as React from "react";
import { Component } from "react";

import "./Credential.css";

interface IProps {
	distinction: string;
	earned: string;
	name: string;
	source: string;
	topic: string;
}

export default class Credential extends Component<IProps> {
	public render() {
		return (
			<div className="Credential">
				<div>
					<div className="Credential-source">{this.props.source}</div>
					<div className="Credential-earned">{this.props.earned}</div>
				</div>
				<div>
					<div className="Credential-name">{this.props.name}</div>
					<div className="Credential-topic">{this.props.topic}</div>
					<div className="Credential-distinction">{this.props.distinction}</div>
				</div>
			</div>
		);
	}
}
