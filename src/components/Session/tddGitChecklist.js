import React, { Component } from 'react';

export default class GitChecklist extends Component {
	render() {
		return (
			<div style={styles.container}>
				<h3>Git Checklist</h3>
				<p>1. Create New Branch</p>
				<p>2. Commit After each Iteration of Tests and Code</p>
				<p>3. Push feature branch to repo at the end of the session</p>
			</div>
		);
	}
}

const styles = {
	container: {
		height: "100%",
		width: "100%",
		// display: "flex",
		// flexFlow: "column",
		padding: "10px"
	}
}