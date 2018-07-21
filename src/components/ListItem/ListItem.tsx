import * as React from "react";
import { Component } from "react";

import "./ListItem.css";

export default class ListItem extends Component {
	public render() {
		return (
			<div className="ListItem">
				<div className="ListItem-marker">*</div>
				<div className="ListItem-text">{this.props.children}</div>
			</div>
		);
	}
}
