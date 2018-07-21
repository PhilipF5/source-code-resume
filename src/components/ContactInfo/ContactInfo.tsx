import * as React from "react";
import { Component } from "react";

import { SocialButton } from "components/SocialButton/SocialButton";
import { ContactData } from "models/ContactData";
import { SyntacticEngine } from "utilities/SyntacticEngine";

import "./ContactInfo.css";

interface Props {
	bio: string;
	contacts: ContactData[];
	name: string;
}

export class ContactInfo extends Component<Props> {
	public render() {
		return (
			<div className="ContactInfo">
				<div className="ContactInfo-name">{this.props.name}</div>
				<div className="ContactInfo-bio">{SyntacticEngine.commentInfo(this.props.bio)}</div>
				<div className="ContactInfo-contact">{this.getSocialButtons()}</div>
			</div>
		);
	}

	public getSocialButtons() {
		return this.props.contacts
			.sort((a, b) => {
				if (a.service < b.service) {
					return -1;
				} else {
					return 1;
				}
			})
			.map(c => {
				return <SocialButton key={c.service} link={c.link} service={c.service} text={c.text} />;
			});
	}
}
