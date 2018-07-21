import * as React from "react";
import { Component } from "react";

import { List } from "components/List/List";

import "./ExperienceList.css";
import { PageSection } from "../PageSection/PageSection";

interface Props {
	items: string[];
}

export class ExperienceList extends Component<Props> {
	public render() {
		return (
			<PageSection title="Experience">
				<List items={this.props.items} />
			</PageSection>
		);
	}
}
