import React, { Component } from 'react';
// import { projects } from '../../constants/projects';
import { Link } from 'react-router-dom'
import { Card, Elevation } from '@blueprintjs/core';

export default class SessionItem extends Component {
	render() {
		// const projectId = this.props.session.projectId;
		// const project = projects.filter((project) => {
		// 	return projectId === project.id;
		// });
		
		const { session } = this.props;
		return (
			<Card style={styles.container} interactive={true} elevation={Elevation.TWO}>
				<h5><Link to={`/sessions/${session.id}`}>Session ID: {session.id}</Link></h5>
				<p>{session.title}</p>
				<p>{session.description}</p>
				{/* <p>{project[0].title}</p>
				<p>{project[0].description}</p> */}
				{/* <p>{this.props.session.participants.join(", ")}</p> */}
			</Card>
		);
	}
}

const styles = {
	container: {
		margin: "10px",
		padding: "10px",
	}
}