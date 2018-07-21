import * as React from "react";
import { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import "./SocialButton.css";

interface Props {
	link: string;
	service: "GitHub" | "LinkedIn" | "Messenger" | "Twitter",
	text: string;
}

export default class SocialButton extends Component<Props> {
	public render() {
		return (
			<div className="SocialButton">
				<a href={this.props.link}>
					<FontAwesomeIcon icon={this.getIcon()} />
					<div className="SocialButton-name">{this.props.service}</div>
					<div className="SocialButton-text">{this.props.text}</div>
				</a>
			</div>
		);
	}

	private getIcon() {
		switch (this.props.service) {
			case "GitHub":
				return faGithub;
			case "LinkedIn":
				return faLinkedin;
			case "Messenger":
				return faFacebookMessenger;
			case "Twitter":
				return faTwitter;
		}
	}
}
