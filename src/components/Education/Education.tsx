import * as React from "react";
import { Component } from "react";

import Credential from "../Credential/Credential";
import PageSection from "../PageSection/PageSection";
import "./Education.css";

interface IProps {
	credentials: any[];
}

export default class Education extends Component<IProps> {
	public render() {
		const credentials = this.props.credentials.map(c => (
			<Credential
				distinction={c.distinction}
				earned={c.earned}
				location={c.location}
				name={c.name}
				source={c.source}
				topic={c.topic}
			/>
		));

		return (
			<PageSection title="Education">{credentials}</PageSection>
		);
	}
}
