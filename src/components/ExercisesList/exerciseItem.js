import React, { Component } from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

export default class ExerciseItem extends Component {
	render() {
		const { exercise } = this.props;
		return (
			<Card style={styles.container} elevation={Elevation.TWO}>
				<h5><Link to={`/exercises/${exercise.id}`}>Exercise ID: {exercise.id}</Link></h5>
				<h2>{exercise.title}</h2>
				<p>{exercise.description}</p>
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
		border: "1px solid black"
	}
}