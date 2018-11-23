import React, { Component } from 'react';
import ExerciseItem from './exerciseItem';

export default class ExercisesList extends Component {
	renderExercises() {
		return this.props.exercises.map((exercise, index) => {
			return (<ExerciseItem key={index} exercise={exercise}/>);
		});
	}

	render() {
		return(
			<div style={styles.container}>
				{this.renderExercises()}
			</div>
		);
	}
}

const styles = {
	container: {
		height: "100%",
		width: "100%",
	}
}