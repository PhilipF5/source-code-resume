import * as React from "react";

import ListItem from "components/ListItem/ListItem";

import "./List.css";

interface IProps {
	items: string[];
}

export default class List extends React.Component<IProps> {
	public render() {
		const items = this.props.items.map(item => {
			return (
				<ListItem key={item}>{item}</ListItem>
			);
		});

		return (
			<ul>{items}</ul>
		);
	}
}
