import * as React from "react";
import { Component } from "react";

import { List } from "components/List/List";

import "./IntangibleList.css";
import { PageSection } from "../PageSection/PageSection";

interface Props {
	items: string[];
}

export class IntangibleList extends Component<Props> {
	public render() {
		return (
			<PageSection title="Intangibles">
				<List items={this.props.items} />
			</PageSection>
		);
	}
}
