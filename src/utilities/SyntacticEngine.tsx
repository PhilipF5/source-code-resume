import * as React from "react";

export class SyntacticEngine {
	public static addBrackets(level: number, ...contents: JSX.Element[]): JSX.Element {
		return (
			<span>
				{this.bracketLeft(level)}
				{contents}
				{this.bracketRight(level)}
			</span>
		);
	}

	public static addCurlyBrackets(level: number, ...contents: JSX.Element[]): JSX.Element {
		return (
			<span>
				{this.bracketLeftCurly(level)}
				&nbsp;{contents}&nbsp;
				{this.bracketRightCurly(level)}
			</span>
		);
	}

	public static addPropertyLabel(label: string, contents: JSX.Element): JSX.Element {
		return (
			<span>
				{label}: {contents}
			</span>
		);
	}

	public static applyOperator(item1: JSX.Element, operator: string, item2: JSX.Element): JSX.Element {
		return (
			<span>
				{item1} <span className="keyword">{operator}</span> {item2}
			</span>
		);
	}

	public static bracketLeft(level: number): JSX.Element {
		return <span className={`bracket-${level}`}>&#91;</span>;
	}

	public static bracketLeftCurly(level: number): JSX.Element {
		return <span className={`bracket-${level}`}>&#123;</span>;
	}

	public static bracketRight(level: number): JSX.Element {
		return <span className={`bracket-${level}`}>&#93;</span>;
	}

	public static bracketRightCurly(level: number): JSX.Element {
		return <span className={`bracket-${level}`}>&#125;</span>;
	}

	public static camelCase(contents: string): string {
		return contents
			.replace(/\s(.)/g, char => char.toUpperCase())
			.replace(/\s/g, "")
			.replace(/^(.)/, char => char.toLowerCase());
	}

	public static commentAlert(contents: string): JSX.Element {
		return <span className="alert comment">&#47;&#47; ! {contents}</span>;
	}

	public static commentInfo(contents: string): JSX.Element {
		return <span className="info comment">&#47;&#47; ? {contents}</span>;
	}

	public static commentRegular(contents: string): JSX.Element {
		return <span className="reg-comment comment">&#47;&#47; {contents}</span>;
	}

	public static dotNotation(...contents: string[]): JSX.Element {
		let joined: JSX.Element[] = [];

		for (let i = 0; i < contents.length; i++) {
			if (i + 1 === contents.length) {
				joined.push(<span key={contents[i]}>{contents[i]}</span>);
			} else {
				joined.push(
					<span key={contents[i]}>
						<span className="object">{contents[i]}</span>.
					</span>
				);
			}
		}

		return <span>{joined}</span>;
	}

	public static indent(): JSX.Element {
		return <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>;
	}

	public static keyword(contents: string): JSX.Element {
		return <span className="keyword">{contents}</span>;
	}

	public static objectName(contents: string): JSX.Element {
		return <span className="name">{contents}</span>;
	}

	public static pascalCase(contents: string): string {
		return contents
			.replace(/\s(.)/g, char => char.toUpperCase())
			.replace(/\s/g, "")
			.replace(/^(.)/, char => char.toUpperCase());
	}

	public static separateWithComma(...contents: JSX.Element[]): JSX.Element[] {
		return this.separate(", ", ...contents);
	}

	public static snakeCase(contents: string): string {
		return contents.replace(/\s/g, "_");
	}

	public static string(contents: string): JSX.Element {
		return <span className="string">&quot;{contents}&quot;</span>;
	}

	public static typeName(contents: string): JSX.Element {
		return <span className="type">{contents}</span>;
	}

	private static separate(separator: string, ...contents: JSX.Element[]): JSX.Element[] {
		let domSeparator = <span>{separator}</span>;
		let newContents: JSX.Element[] = [];

		for (let i = 0; i < contents.length; i++) {
			newContents.push(contents[i], domSeparator);
		}

		newContents.pop();
		return newContents;
	}
}
