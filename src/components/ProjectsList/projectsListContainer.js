import React, { Component } from 'react';
import ProjectsList from './projectsList';
import { projects } from '../../constants/projects';
import { ProjectsQuery } from '../../gql/queries';
import { Query } from 'react-apollo';

export const ProjectsListComponent2 = () => (
	// eslint-disable-next-line no-unused-expressions
	<Query query={ProjectsQuery}>
		{({loading, error, data}) => {
			if (loading) return (<p>Loading...</p>);
			if (error) return (<p>{`Error! ${error.message}`}</p>);
			return (
				<div style={styles.container}>
					<ProjectsList projects={data.projects}/>
				</div>
			);
		}}
	</Query>
)

export default class ExercisesListComponent extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			projects: []
		}

		this.getProjects = this.getProjects.bind(this);
	}

	componentDidMount() {
		this.getProjects();
	}

	getProjects() {
		this.setState({
			projects: projects
		});
	}

	render() {
		return(
			<div style={styles.container}>
				<ProjectsList projects={this.state.projects}/>
			</div>
		);
	}
}

const styles = {
	container: {
		height: "100%",
		width: "100%",
		// margin: "10px",
		// padding: "10px"
	}
}