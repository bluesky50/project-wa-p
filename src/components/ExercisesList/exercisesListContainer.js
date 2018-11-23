import React, { Component } from 'react';
import ExercisesList from './exercisesList';
import { exercises } from '../../constants/exercises';
import { ExercisesQuery } from '../../gql/queries';
import { Query } from 'react-apollo';

export const ExercisesListComponent2 = () => (
	<Query query={ExercisesQuery}>
		{({loading, error, data}) => {
			if (loading) return (<p>Loading...</p>);
			if (error) return (<p>{`Error! ${error.message}`}</p>);
			return (
				<div style={styles.container}>
					<ExercisesList exercises={data.exercises}/>
				</div>
			);
		}}
	</Query>
)

export default class ExercisesListComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			exercises: []
		}

		this.getExercises = this.getExercises.bind(this);
	}

	componentDidMount() {
		this.getExercises();
	}

	getExercises() {
		this.setState({
			exercises: exercises
		})
	}

	render() {
		return(
			<div style={styles.container}>
				<ExercisesList exercises={this.state.exercises}/>
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