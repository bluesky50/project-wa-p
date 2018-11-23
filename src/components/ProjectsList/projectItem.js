import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Elevation } from '@blueprintjs/core';

export default class ProjectItem extends Component {
	render() {
		const { project } = this.props;
		return (
			<Card style={styles.container} elevation={Elevation.TWO}>
			<h5><Link to={`/projects/${project.id}`}>Project ID: {project.id}</Link></h5>
				<h2>{project.title}</h2>
				<p>{project.description}</p>
			</Card>
		);
	}
}

const styles = {
	container: {
		// height: "100%",
		// width: "100%",
		margin: "10px",
		padding: "10px",
		// border: "1px solid black"
	}
}