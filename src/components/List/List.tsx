import * as React from "react";
import "./List.css";

interface IProps {
	items: string[];
}

export default class List extends React.Component<IProps> {
	public render() {
		const items = this.props.items.map(item => {
			return (
				<li key={item}>{item}</li>
			);
		});

		return (
			<ul>{items}</ul>
		);
	}
}
