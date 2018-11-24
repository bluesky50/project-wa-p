import React, { Component } from 'react';

import { Callout, Text } from '@blueprintjs/core';

class LoadingError extends Component {
	render() {
		const { message } = this.props;
		return (
			<div style={styles.pageContainer}>
				<Callout intent="warning">
					<Text>{message}</Text>
				</Callout>
			</div>
		)
	}
}

export default class Exercise extends Component {
	render() {
		return (
			<div style={styles.pageContainer}>
				<div style={styles.menuContainer}>

				</div>
				<div style={styles.bodyContainer}>

				</div>
			</div>
		);
	}
}

const styles = {
	pageContainer: { 
		height: "100vh",
		width: "100%",
		display: "flex",
		flexFlow: "column"
	},
	menuContainer: {
		height: "70px",
		width: "100%",
		background: "darkgray"
	},
	bodyContainer: {
		width: "100%",
		flexGrow: "1",
		display: "flex",
		background: "lightgray"
	}
}