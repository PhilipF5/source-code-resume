import * as React from "react";
import { Component } from "react";

import { CredentialData } from "models/CredentialData";
import { SyntacticEngine } from "utilities/SyntacticEngine";

import "./Credential.css";

export class Credential extends Component<CredentialData> {
	public render() {
		return (
			<div className="Credential">
				<div className="Credential-row source">
					<div className="Credential-source">{this.getIssuer()}</div>
					<div className="Credential-location">{this.getIssueLocation()}</div>
					<div className="Credential-earned">{this.getIssueDate()}</div>
				</div>
				<div className="Credential-row cred">
					{this.getCredInfo()}
					{SyntacticEngine.commentAlert(this.props.distinction)}
				</div>
			</div>
		);
	}

	public getCredInfo(): JSX.Element {
		return SyntacticEngine.applyOperator(
			SyntacticEngine.objectName(SyntacticEngine.snakeCase(this.props.name)),
			"=",
			SyntacticEngine.addCurlyBrackets(1, <span>{SyntacticEngine.pascalCase(this.props.topic)}</span>)
		);
	}

	public getIssuer(): JSX.Element {
		return (
			<div>
				{SyntacticEngine.keyword("from")} {SyntacticEngine.string(this.props.source)}
			</div>
		);
	}

	public getIssueDate(): JSX.Element {
		return SyntacticEngine.string(this.props.earned);
	}

	public getIssueLocation(): JSX.Element {
		return SyntacticEngine.dotNotation(this.props.location.state, this.props.location.city);
	}
}
