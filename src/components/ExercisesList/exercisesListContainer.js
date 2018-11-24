import React, { Component } from 'react';
import ExercisesList from './exercisesList';
// import { exercises } from '../../constants/exercises';
import { ExercisesQuery } from '../../gql/queries';
import { Query } from 'react-apollo';
import { Callout, Text } from '@blueprintjs/core';

class ExercisesWarning extends Component {
	render() {
		const { message } = this.props;
		return (
			<div style={styles.container}>
				<Callout intent="warning">
					<Text>{message}</Text>
				</Callout>
			</div>
		);
	}
}

export const ExercisesListComponent2 = () => (
	<Query query={ExercisesQuery}>
		{({loading, error, data}) => {
			if (loading) return (<p>Loading...</p>);
			if (error) return (<ExercisesWarning message={`Error! ${error.message}`}/>);
			return (<ExercisesListComponent exercises={data.exercises}/>);
		}}
	</Query>
)

export default class ExercisesListComponent extends Component {
	renderExercises(exercises) {
		if (exercises) {
			return (
				<div style={styles.container}>
					<ExercisesList exercises={exercises}/>
				</div>
			)
		}

		return (<ExercisesWarning message={"Unable to fetch exercises"}/>);
	}

	render() {
		const { exercises } = this.props;
		return this.renderExercises(exercises);
	}
}

const styles = {
	container: {
		height: "100%",
		width: "100%",
		display: "flex",
		flexFlow: "column"
	}
}