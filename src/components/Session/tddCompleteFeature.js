import React, { Component } from 'react';
import { Button } from '@blueprintjs/core';

export default class CompleteFeature extends Component {
	onClick = () => {
		this.props.actions.completeFeature()
	}

	render() {
		return (
			<div style={styles.container}>
				<Button onClick={this.onClick} className="bp3-fill">Complete Feature</Button>
			</div>
		);
	}
}

const styles = {
	container: {
		height: "100%",
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexFlow: "column",
	}
}