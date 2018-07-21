import * as React from "react";
import { Component } from "react";

import { Credential } from "components/Credential/Credential";
import { PageSection } from "components/PageSection/PageSection";
import { CredentialData } from "models/CredentialData";

import "./Education.css";

interface Props {
	credentials: CredentialData[];
}

export class Education extends Component<Props> {
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

		return <PageSection title="Education">{credentials}</PageSection>;
	}
}
