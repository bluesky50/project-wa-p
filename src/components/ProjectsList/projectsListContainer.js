import React, { Component } from 'react';
import ProjectsList from './projectsList';
// import { projects } from '../../constants/projects';
import { ProjectsQuery } from '../../gql/queries';
import { Callout, Text } from '@blueprintjs/core';
import { Query } from 'react-apollo';

class ProjectsWarning extends Component {
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

export const ProjectsListComponent2 = () => (
	// eslint-disable-next-line no-unused-expressions
	<Query query={ProjectsQuery}>
		{({loading, error, data}) => {
			if (loading) return (<p>Loading...</p>);
			if (error) return (<ProjectsWarning message={`Error! ${error.message}`}/>);
			return (
				<ProjectsListComponent projects={data.projects}/>
				// <div style={styles.container}>
				// 	<ProjectsList projects={data.projects}/>
				// </div>
			);
		}}
	</Query>
)

export default class ProjectsListComponent extends Component {
	renderProjectsList(projects) {
		if (projects) {
			return (
				<div style={styles.container}>
					<ProjectsList projects={projects}/>
				</div>
			);
		} else {
			return (<ProjectsWarning message={"Unable to fetch projects"}/>)
		}
	}

	render() {
		const { projects } = this.props;
		return this.renderProjectsList(projects);
	}
}

const styles = {
	container: {
		height: "100%",
		width: "100%",
		display: "flex",
		flexFlow: "column"
		// margin: "10px",
		// padding: "10px"
	}
}