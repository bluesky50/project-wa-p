import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Callout, Text } from '@blueprintjs/core';
import { ExerciseQuery } from '../gql/queries';
import { Link } from 'react-router-dom';

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

export const ExerciseDetailPage = ({ match }) => (
	<Query query={ExerciseQuery} variables={{ exerciseId: match.params.exerciseId }}>
		{({loading, error, data}) => {
			if (loading) return (<p>Loading...</p>);
			if (error) return (<LoadingError message={`Error! ${error.message}`}/>);
			return (
				<Exercise exercise={data.exercise}/>
			);
		}}
	</Query>
)

export default class Exercise extends Component {
	renderExercise(exercise) {
		if (exercise) {
			return (
				<div style={styles.pageContainer}>
					<div style={styles.menuContainer}>
						<Link to="/exercises">Exercises</Link>
						<Text>Exercise Overview Info</Text>
					</div>
					<div style={styles.bodyContainer}>
						<Callout title={exercise.title} style={styles.callout}>
							<Text>Creator: Some user</Text>
							<Text>Exercise tags, category, type</Text>
						</Callout>
						<Callout style={styles.callout}>
							<Text>{exercise.description}</Text>
						</Callout>
						<Callout style={styles.callout}>
							<Text>Exercise requirements</Text>
						</Callout>
					</div>
				</div>
			);
		}

		return (
			<LoadingError message={"Unable to find exercise"}/>
		);
	}

	render() {
		const { exercise } = this.props;
		return this.renderExercise(exercise);
		
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
		// background: "darkgray"
	},
	bodyContainer: {
		width: "100%",
		flexGrow: "1",
		display: "flex",
		flexFlow: "column",
		padding: "10px",
		// background: "lightgray"
	},
	callout: {
		marginBottom: "10px"
	}
}