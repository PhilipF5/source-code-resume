import * as React from "react";
import { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger, faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

import { ContactData } from "models/ContactData";

import "./SocialButton.css";

export class SocialButton extends Component<ContactData> {
	public render() {
		return (
			<div className="SocialButton">
				<a href={this.props.link} target="_blank">
					<FontAwesomeIcon className="SocialButton-icon" icon={this.getIcon()} />
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
