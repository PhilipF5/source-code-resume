import * as React from "react";
import { Component } from "react";

import { ListItem } from "components/ListItem/ListItem";

import "./List.css";

interface Props {
	items: string[];
}

export class List extends Component<Props> {
	public render() {
		const items = this.props.items.map(item => {
			return <ListItem key={item}>{item}</ListItem>;
		});

		return <div>{items}</div>;
	}
}
