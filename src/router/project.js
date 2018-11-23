import React, { Component } from 'react';

export default class Project extends Component {
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