import * as React from "react";
import { Component } from "react";

import SocialButton from "../SocialButton/SocialButton";

import "./ContactInfo.css";

interface IProps {
	data: any;
}

export default class ContactInfo extends Component<IProps> {
	public render() {
		return (
			<div className="ContactInfo">
				<div className="ContactInfo-name">
					{this.props.data.name}
				</div>
				<div className="ContactInfo-bio">
					{this.props.data.bio}
				</div>
				<div className="ContactInfo-contact">
					{this.getSocialButtons()}
				</div>
			</div>
		);
	}

	public getSocialButtons() {
		return this.props.data.contact
			.sort((a, b) => {
				if (a.service < b.service) {
					return -1;
				} else {
					return 1;
				}
			})
			.map(c => {
				return (
					<SocialButton key={c.service} link={c.link} service={c.service} text={c.text} />
				);
			});
	}
}
