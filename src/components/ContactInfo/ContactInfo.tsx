import * as React from "react";
import { Component } from "react";

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
				<div className="ContactInfo-address">
					{this.props.data.address.street}<br />
					{this.props.data.address.city}, {this.props.data.address.state} {this.props.data.address.zipCode}
				</div>
				<div className="ContactInfo-email">
					{this.props.data.email}
				</div>
			</div>
		);
	}
}
